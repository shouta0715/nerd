import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { ZodError } from "zod";
import { DELETE_USER } from "src/graphql/user/userQuery";
import { DeleteUserMutation } from "src/graphql/user/userQuery.generated";
import {
  BadRequestError,
  InternalServerError,
  MethodNotAllowedError,
} from "src/libs/error";
import { getClient } from "src/libs/server/client";
import {
  ApiResponse,
  ReturnDeleteUser,
  deleteUserSchema,
} from "src/libs/server/types";
import { validate } from "src/libs/server/validate";

const deleteHandler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnDeleteUser>
) => {
  try {
    validate(req.query, deleteUserSchema);

    const data = await getClient().request<DeleteUserMutation>(DELETE_USER, {
      id: req.query.id,
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
      return res.status(400).json(new BadRequestError().throwMessage());
    }

    return res.status(500).json(new InternalServerError().throwMessage());
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      return deleteHandler(req, res);
    default:
      return res.status(405).json(new MethodNotAllowedError().throwMessage());
  }
};

export default handler;
