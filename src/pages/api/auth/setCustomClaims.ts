/* eslint-disable @typescript-eslint/no-explicit-any */

import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { CREATE_USER } from "src/graphql/user/userQuery";

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
  const { idToken, refreshToken } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!idToken) {
    return res.status(400).send("No idToken");
  }
  const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;
  const idTokenResult = await getAuth().verifyIdToken(idToken);
  const isHasClaims = idTokenResult[TOKEN_KEY];

  if (isHasClaims) {
    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).send("ok");
  }

  const isAnonymous = idTokenResult.firebase.sign_in_provider === "anonymous";

  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user", "anonymous"],
      "x-hasura-role": isAnonymous ? "anonymous" : "user",
      "x-hasura-user-id": idTokenResult.uid,
    },
  };

  const url = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const client = new GraphQLClient(url, {
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET as string,
    },
  });

  try {
    await getAuth().setCustomUserClaims(idTokenResult.uid, customClaims);
    await client.request(CREATE_USER, {
      id: idTokenResult.uid,
      anonymous: isAnonymous,
      photo_url: idTokenResult.picture ?? null,
      user_name: idTokenResult.name ?? "匿名",
      ip: ip ?? null,
    });

    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).json({ message: "ok" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default handler;
