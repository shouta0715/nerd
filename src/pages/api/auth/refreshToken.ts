/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { BadRequestError, InternalServerError } from "src/libs/error";
import { createOption } from "src/libs/server/options";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    throw new BadRequestError();
  }

  try {
    const data = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
      }
    ).then((r) => {
      return r.text();
    });

    const { id_token: idToken } = JSON.parse(data);
    const option = createOption();
    setCookie({ res }, "refreshToken", refreshToken, option);

    return res.status(200).json({ message: "ok", idToken });
  } catch (err: any) {
    return res.status(500).json(new InternalServerError().throwMessage());
  }
};

export default handler;
