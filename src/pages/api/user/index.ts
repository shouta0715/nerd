import { NextApiRequest } from "next";
import { ZodError } from "zod";
import { CREATE_USER } from "../../../graphql/user/userQuery";
import { CreateUserMutation } from "src/graphql/user/userQuery.generated";
import {
  BadRequestError,
  InternalServerError,
  MethodNotAllowedError,
} from "src/libs/error";
import { getClient } from "src/libs/server/client";
import {
  ApiResponse,
  ReturnCreateUser,
  ReturnDeleteUser,
  createUserSchema,
} from "src/libs/server/types";
import { validate } from "src/libs/server/validate";

const postHandler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnCreateUser>
) => {
  try {
    validate(req.body, createUserSchema);
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const { id, user_name, photo_url } = req.body;

    const data = await getClient().request<CreateUserMutation>(CREATE_USER, {
      id,
      user_name: user_name || "匿名",
      photo_url,
      ip,
    });

    return res.status(200).json({
      data,
      message: "ok",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      throw new BadRequestError();
    }

    throw new InternalServerError();
  }
};

const handler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnDeleteUser>
) => {
  switch (req.method) {
    case "POST":
      return postHandler(req, res);
    default:
      return res.status(405).json(new MethodNotAllowedError().throwMessage());
  }
};

export default handler;
