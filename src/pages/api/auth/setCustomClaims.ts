/* eslint-disable @typescript-eslint/no-explicit-any */

import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { NextApiRequest } from "next";
import { setCookie } from "nookies";
import { ZodError } from "zod";
import { BadRequestError, InternalServerError } from "src/libs/error";
import {
  createCustomClaims,
  createOption,
  firebaseConfig,
} from "src/libs/server/options";
import {
  ApiResponse,
  ReturnCreateClaims,
  createClaimsSchema,
} from "src/libs/server/types";
import { validate } from "src/libs/server/validate";

const _ = getApps().length ? getApp() : initializeApp(firebaseConfig);
const handler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnCreateClaims>
) => {
  try {
    validate(req.body, createClaimsSchema);
    const { id, isAnonymous, refreshToken } = req.body;

    const option = createOption();
    const customClaims = createCustomClaims(id, isAnonymous);

    await getAuth().setCustomUserClaims(id, customClaims);

    setCookie({ res }, "refreshToken", refreshToken, option);

    return res.status(200).json({ message: "ok" });
  } catch (err: any) {
    if (err instanceof ZodError) {
      throw new BadRequestError();
    }

    throw new InternalServerError();
  }
};

export default handler;
