import {cert} from "firebase-admin/app";

export const createCustomClaims = (uid: string, isAnonymous: boolean) => ({
  "https://hasura.io/jwt/claims": {
    "x-hasura-default-role": isAnonymous ? "anonymous" : "user",
    "x-hasura-allowed-roles": ["user", "anonymous"],
    "x-hasura-user-id": uid,
  },
});

export const getFirebaseConfig = () => {
  return {
    credential: cert({
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  };
};
