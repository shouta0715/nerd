/* eslint-disable @typescript-eslint/no-explicit-any */

import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
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

const _ = getApps().length ? getApp() : initializeApp(firebaseConfig);
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { idToken, refreshToken, isInitialLogin } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!idToken || !refreshToken) {
    return res.status(400).send("No idToken");
  }
  const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;
  const idTokenResult = await getAuth().verifyIdToken(idToken);
  const isHasClaims = idTokenResult[TOKEN_KEY];
  const isAnonymous = idTokenResult.firebase.sign_in_provider === "anonymous";

  if (isHasClaims && !isInitialLogin) {
    const data = await client.request(GET_USER, {
      id: idTokenResult.uid,
    });

    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).send({ message: "ok", data });
  }

  const customClaims = createCustomClaims(idTokenResult.uid, isAnonymous);

  try {
    await getAuth().setCustomUserClaims(idTokenResult.uid, customClaims);
    const user = isAnonymous
      ? null
      : (await getAuth().getUser(idTokenResult.uid)).providerData[0];

    const data = await client.request(CREATE_USER, {
      id: idTokenResult.uid,
      anonymous: isAnonymous,
      photo_url: user ? user.photoURL ?? null : null,
      user_name: user ? user.displayName ?? "匿名" : "匿名",
      ip: ip ?? null,
    });

    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).json({ message: "ok", data });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default handler;
