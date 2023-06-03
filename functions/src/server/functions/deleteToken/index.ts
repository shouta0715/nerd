import {Next, ReturnDeleteToken} from "../../types";
import {MethodNotAllowedError} from "../../error";

export const deleteHandler: Next<ReturnDeleteToken> = async (req, res) => {
  res.clearCookie("refreshToken");

  return res.status(200).json({
    message: "ok",
  });
};

export const deleteTokenHandler: Next<ReturnDeleteToken> = (req, res) => {
  switch (req.method) {
  case "DELETE":
    return deleteHandler(req, res);
  default:
    return res.status(405).json(new MethodNotAllowedError().throwMessage());
  }
};
