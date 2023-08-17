import CryptoJS from "crypto-js";
import { NextApiResponse } from "next";
import { errors } from "src/libs/error";

export const config = {
  runtime: "edge",
};

const secretKey = process.env.ENCRYPTION_KEY as string;

const getHandler = async (request: Request): Promise<Response> => {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("cf-connecting-ip");
  let clientIp: string | null = null;

  if (ip) {
    clientIp = ip.includes(",") ? ip.split(",")[0] : ip;
  }

  if (!clientIp) {
    return new Response(JSON.stringify({ ip: null }), { status: 200 });
  }

  const encryptedIp = CryptoJS.AES.encrypt(clientIp, secretKey).toString();

  return new Response(JSON.stringify({ ip: encryptedIp }), { status: 200 });
};

const notAllowedHandler = (res: NextApiResponse) => {
  const status = 405;
  const { message } = errors[status];

  res.status(status).json({
    message,
    status,
  });
};

const handlers = async (req: Request, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getHandler(req);
    default:
      return notAllowedHandler(res);
  }
};

export default handlers;
