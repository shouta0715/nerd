import {getApp, getApps, initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";

import {ZodError} from "zod";
import {createCustomClaims, getFirebaseConfig} from "../../config/options";
import {validate} from "../../types/validate";
import {Next, ReturnCreateClaims, createClaimsSchema} from "../../types";
import {
  BadRequestError,
  InternalServerError,
  MethodNotAllowedError,
} from "../../error";

export const postHandler: Next<ReturnCreateClaims> = async (req, res) => {
  getApps().length === 0 ? initializeApp(getFirebaseConfig()) : getApp();

  try {
    validate(req.body, createClaimsSchema);
    const {id, isAnonymous} = req.body;
    const customClaims = createCustomClaims(id, isAnonymous);

    await getAuth().setCustomUserClaims(id, customClaims);
    res.status(200).json({message: "ok"});
  } catch (err: any) {
    if (err instanceof ZodError) {
      res.status(400).json(new BadRequestError().throwMessage());

      return;
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
