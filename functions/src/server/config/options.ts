import {CookieOptions} from "express";
import {cert} from "firebase-admin/app";

export const createCustomClaims = (uid: string, isAnonymous: boolean) => ({
  "https://hasura.io/jwt/claims": {
    "x-hasura-default-role": isAnonymous ? "anonymous" : "user",
    "x-hasura-allowed-roles": ["user", "anonymous"],
    "x-hasura-user-id": uid,
  },
});

export const createOption = (): CookieOptions => ({
  maxAge: 14 * 24 * 60 * 60, // 14 days
  httpOnly: process.env.NODE_ENV === "production",
  secure: process.env.NODE_ENV === "production",
  sameSite: "none",
  path: "/",
  domain: process.env.ORIGIN,
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
