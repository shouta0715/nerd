import { NextApiRequest } from "next";
import { setCookie } from "nookies";
import { ZodError } from "zod";
import { CREATE_USER, DELETE_USER } from "../../../graphql/user/userQuery";
import {
  CreateUserMutation,
  DeleteUserMutation,
} from "src/graphql/user/userQuery.generated";
import { getClient } from "src/libs/server/client";
import {
  ApiResponse,
  ReturnCreateUser,
  ReturnDeleteUser,
  createUserSchema,
  deleteUserSchema,
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
      return res.status(400).json({
        message: "id が必要です",
      });
    }

    return res.status(500).json({
      message: "エラーが発生しました",
    });
  }
};

const deleteHandler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnDeleteUser>
) => {
  try {
    validate(req.body, deleteUserSchema);
    const { id } = req.body;

    const data = await getClient().request<DeleteUserMutation>(DELETE_USER, {
      id,
    });

    setCookie({ res }, "refreshToken", "", {
      maxAge: -1,
      path: "/",
    });

    return res.status(200).json({
      data,
      message: "ok",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: "id が必要です",
      });
    }

    return res.status(500).json({
      message: "エラーが発生しました",
    });
  }
};
const handler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnDeleteUser>
) => {
  switch (req.method) {
    case "POST":
      return postHandler(req, res);
    case "DELETE":
      return deleteHandler(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;