import { cert } from "firebase-admin/app";

export const firebaseConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

export const createOptions = (uid: string, isAnonymous: boolean) => {
  const options = {
    maxAge: 14 * 24 * 60 * 60, // 14 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  };

  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": isAnonymous ? "anonymous" : "user",
      "x-hasura-allowed-roles": ["user", "anonymous"],
      "x-hasura-user-id": uid,
    },
  };

  return {
    options,
    customClaims,
  };
};
