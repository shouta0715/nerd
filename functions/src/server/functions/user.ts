import { ZodError } from "zod";
import { CreateUserMutation } from "../../user/types";
import { CREATE_USER } from "../../user/userQuery";
import { getClient } from "../client";
import {
  BadRequestError,
  InternalServerError,
  MethodNotAllowedError,
} from "../error";
import { Next, ReturnCreateUser, createUserSchema } from "../types";
import { validate } from "../validate";

const postHandler: Next<ReturnCreateUser> = async (req, res) => {
  try {
    validate(req.body, createUserSchema);
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const { id, user_name, photo_url, isAnonymous } = req.body;

    const data = await getClient().request<CreateUserMutation>(CREATE_USER, {
      id,
      user_name: user_name || "匿名",
      photo_url,
      ip,
      isAnonymous,
    });

    res.status(200).json({
      data,
      message: "ok",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(new BadRequestError().throwMessage());

      return;
    }

    res.status(500).json(new InternalServerError().throwMessage());
  }
};

export const userHandler: Next<ReturnCreateUser> = (req, res) => {
  switch (req.method) {
    case "POST":
      return postHandler(req, res);
    default:
      return res.status(405).json(new MethodNotAllowedError().throwMessage());
  }
};
