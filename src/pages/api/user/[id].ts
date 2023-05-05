import { NextApiRequest } from "next";
import { ZodError } from "zod";
import { GET_USER } from "src/graphql/user/userQuery";
import { GetUserQuery } from "src/graphql/user/userQuery.generated";
import { getClient } from "src/libs/server/client";
import {
  ApiResponse,
  ReturnGetUser,
  getUserSchema,
} from "src/libs/server/types";
import { validate } from "src/libs/server/validate";

const getHandler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnGetUser>
) => {
  try {
    validate(req.query, getUserSchema);
    const { id } = req.query;

    const data = await getClient().request<GetUserQuery>(GET_USER, {
      id,
    });

    if (!data.users_by_pk) {
      return res.status(404).json({
        message: "ユーザーが見つかりませんでした",
      });
    }

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
  }

  return res.status(500).json({
    message: "エラーが発生しました",
  });
};

const handler = async (
  req: NextApiRequest,
  res: ApiResponse<ReturnGetUser>
) => {
  switch (req.method) {
    case "GET":
      return getHandler(req, res);
    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
};

export default handler;
