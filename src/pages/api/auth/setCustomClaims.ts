import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import { CREATE_USER } from "src/graphql/user/userQuery";

const firebaseConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

const _ = getApps().length ? getApp() : initializeApp(firebaseConfig);
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).send("No idToken");
  }
  const claims = await getAuth().verifyIdToken(idToken);

  const isAnonymous = claims.firebase.sign_in_provider === "anonymous";

  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user", "anonymous"],
      "x-hasura-role": isAnonymous ? "anonymous" : "user",
      "x-hasura-user-id": claims.uid,
    },
  };

  const url = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const client = new GraphQLClient(url, {
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET as string,
    },
  });

  try {
    await getAuth().setCustomUserClaims(claims.uid, customClaims);
    await client.request(CREATE_USER, {
      id: claims.uid,
      anonymous: isAnonymous,
      photo_url: claims.picture ?? null,
      user_name: claims.name ?? "anonymous",
    });

    return res.status(200).json({ message: "success" });
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
};

export default handler;
