/* eslint-disable @typescript-eslint/no-explicit-any */

import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { NextApiRequest } from "next";
import { setCookie } from "nookies";
import { ZodError } from "zod";
import { createOptions, firebaseConfig } from "src/libs/server/options";
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
    const { user, refreshToken } = req.body;

    const { isAnonymous } = user;
    const { customClaims, options } = createOptions(user.id, isAnonymous);

    await getAuth().setCustomUserClaims(user.id, customClaims);

    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).json({ message: "ok" });
  } catch (err: any) {
    console.error(err);

    if (err instanceof ZodError) {
      return res.status(400).json({
        message: `idToken が必要です: ${err.message}`,
      });
    }

    return res.status(500).json({
      message: `エラーが発生しました: ${err.message}`,
    });
  }
};

export default handler;
