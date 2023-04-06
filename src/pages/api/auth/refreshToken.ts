/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

const options = {
  maxAge: 14 * 24 * 60 * 60, // 14 days
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(400).send("No refreshToken");
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
    ).then((r) => r.text());

    const { id_token: idToken } = JSON.parse(data);
    setCookie({ res }, "refreshToken", refreshToken, options);

    return res.status(200).json({ message: "ok", idToken });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default handler;
