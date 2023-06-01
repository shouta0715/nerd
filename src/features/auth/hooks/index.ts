import request from "graphql-request";
import { GET_USER } from "src/graphql/user/userQuery";
import { GetUserQuery } from "src/graphql/user/userQuery.generated";
import { HttpError, ErrorType } from "src/libs/error";
import {
  CreateClaimsSchema,
  CreateUserSchema,
  ReturnCreateUser,
  ReturnGetUser,
} from "src/libs/server/types";

const url = process.env.NEXT_PUBLIC_ENDPOINT as string;
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;

export const handleSetCustomClaims = async (body: CreateClaimsSchema) => {
  const res = await fetch(`${API_URL}/setCustomClaims`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const status = res.status as ErrorType;

    throw new HttpError(status);
  }

  return res;
};

export const getUser = async (id: string): Promise<ReturnGetUser> =>
  request<GetUserQuery>(url, GET_USER, { id });

export const createUser = async ({
  id,
  user_name,
  photo_url,
  isAnonymous,
}: CreateUserSchema): Promise<ReturnCreateUser> => {
  const res = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, user_name, photo_url, isAnonymous }),
  });

  if (!res.ok) {
    const status = res.status as ErrorType;

    throw new HttpError(status);
  }

  const user = (await res.json()) as ReturnCreateUser;

  return user;
};
