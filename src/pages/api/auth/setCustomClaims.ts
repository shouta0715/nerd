/* eslint-disable @typescript-eslint/no-explicit-any */

import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { UserInfo, getAuth } from "firebase-admin/auth";
import { gql, GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

const url = process.env.NEXT_PUBLIC_ENDPOINT as string;
const client = new GraphQLClient(url, {
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET as string,
  },
});
const CREATE_USER = gql`
  mutation createUser(
    $id: String!
    $anonymous: Boolean!
    $photo_url: String!
    $user_name: String!
    $ip: String
  ) {
    insert_users_one(
      object: {
        anonymous: $anonymous
        photo_url: $photo_url
        id: $id
        user_name: $user_name
        ip: $ip
      }
      on_conflict: {
        constraint: users_pkey
        update_columns: [anonymous, photo_url, updated_at, user_name]
      }
    ) {
      id
      photo_url
      user_name
    }
  }
`;

const GET_USER = gql`
  query getUser($id: String!) {
    users_by_pk(id: $id) {
      id
      photo_url
      user_name
    }
  }
`;

const createCustomClaims = (uid: any, isAnonymous: boolean) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": isAnonymous ? "anonymous" : "user",
      "x-hasura-allowed-roles": ["user", "anonymous"],
      "x-hasura-user-id": uid,
    },
  };

  return customClaims;
};

const firebaseConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

const options = {
  maxAge: 14 * 24 * 60 * 60, // 14 days
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
};

type GetUser = {
  user: UserInfo | null;
  id: string;
  isCreate: boolean;
  isAnonymous: boolean;
  ip?: string | string[];
};

const getUser = async ({ isCreate, user, id, isAnonymous }: GetUser) => {
  if (isCreate) {
    const data = await client.request(CREATE_USER, {
      id,
      anonymous: isAnonymous,
      photo_url: user ? user.photoURL ?? null : null,
      user_name: user ? user.displayName ?? "匿名" : "匿名",
      ip: null,
    });

    return data;
  }

  const data = await client.request(GET_USER, {
    id,
  });

  return data;
};

const _ = getApps().length ? getApp() : initializeApp(firebaseConfig);
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { idToken, refreshToken, isInitialLogin } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!idToken || !refreshToken) {
    return res.status(400).json({
      message: "idTokenとrefreshTokenが必要です",
    });
  }

  try {
    const idTokenResult = await getAuth().verifyIdToken(idToken);
    const isAnonymous = idTokenResult.firebase.sign_in_provider === "anonymous";
    const customClaims = createCustomClaims(idTokenResult.uid, isAnonymous);

    await getAuth().setCustomUserClaims(idTokenResult.uid, customClaims);
    const user = isAnonymous
      ? null
      : (await getAuth().getUser(idTokenResult.uid)).providerData[0];

    const data = await getUser({
      user,
      id: idTokenResult.uid,
      isCreate: isInitialLogin,
      isAnonymous,
      ip,
    });

    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).json({ message: "ok", data });
  } catch (err: any) {
    return res.status(500).json({
      message: `${err.message + err.code}setCustomUserClaimsによるエラー`,
    });
  }
};

export default handler;
