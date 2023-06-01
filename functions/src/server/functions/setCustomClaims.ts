import { initializeApp } from "firebase-admin/app";
import { Next, ReturnCreateClaims, createClaimsSchema } from "../types";
import {
  createCustomClaims,
  createOption,
  getFirebaseConfig,
} from "../options";
import { validate } from "../validate";
import { getAuth } from "firebase-admin/auth";
import { setCookie } from "nookies";
import {
  BadRequestError,
  InternalServerError,
  MethodNotAllowedError,
} from "../error";
import { ZodError } from "zod";

export const postHandler: Next<ReturnCreateClaims> = async (req, res) => {
  initializeApp(getFirebaseConfig());
  try {
    validate(req.body, createClaimsSchema);
    const { id, isAnonymous, refreshToken } = req.body;

    const option = createOption();
    const customClaims = createCustomClaims(id, isAnonymous);

    await getAuth().setCustomUserClaims(id, customClaims);

    setCookie({ res }, "refreshToken", refreshToken, option);

    res.status(200).json({ message: "ok" });
  } catch (err: any) {
    if (err instanceof ZodError) {
      res.status(400).json(new BadRequestError().throwMessage());
    }

    res.status(500).json(new InternalServerError().throwMessage());
  }
};

export const setCustomClaimsHandler: Next<ReturnCreateClaims> = (req, res) => {
  switch (req.method) {
    case "POST":
      return postHandler(req, res);
    default:
      return res.status(405).json(new MethodNotAllowedError().throwMessage());
  }
};
