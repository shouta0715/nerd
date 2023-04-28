/* eslint-disable @typescript-eslint/no-explicit-any */
import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { GraphQLClient, gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

const url = process.env.NEXT_PUBLIC_ENDPOINT as string;
const client = new GraphQLClient(url, {
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET as string,
  },
});

const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;

const firebaseConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

const _ = getApps().length ? getApp() : initializeApp(firebaseConfig);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send("No id");
  }

  try {
    await client.request(DELETE_USER, { id });

    setCookie({ res }, "refreshToken", "", {
      maxAge: -1,
      path: "/",
    });

    return res.status(200).json({ message: "ok" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default handler;
