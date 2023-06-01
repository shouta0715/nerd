import {setCookie} from "nookies";
import {BadRequestError, InternalServerError} from "../error";
import {createOption} from "../options";
import {Next, ReturnRefreshToken, refreshSchema} from "../types";
import {validate} from "../validate";

export const refresh: Next<ReturnRefreshToken> = async (req, res) => {
  const {refreshToken} = req.cookies;

  if (!refreshToken) {
    res.status(400).json(new BadRequestError().throwMessage());
  }

  try {
    const data = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.API_KEY}`,
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

    const {id_token: idToken} = JSON.parse(data);
    const option = createOption();
    setCookie({res}, "refreshToken", refreshToken, option);

    try {
      validate(idToken, refreshSchema);
    } catch (error) {
      res.status(400).json(new BadRequestError().throwMessage());
    }

    res.status(200).json({message: "ok", data: idToken});
  } catch (err: any) {
    res.status(500).json(new InternalServerError().throwMessage());
  }
};
