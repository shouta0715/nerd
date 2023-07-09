import { useMutation } from "@tanstack/react-query";

import { HttpError, ErrorType } from "src/libs/error";
import {
  CreateClaimsSchema,
  CreateUserSchema,
  ReturnCreateUser,
} from "src/libs/server/types";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;

export const handleSetCustomClaims = async (body: CreateClaimsSchema) => {
  const res = await fetch(`${API_URL}/setCustomClaims`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${body.token}`,
    },
    body: JSON.stringify({
      id: body.id,
      isAnonymous: body.isAnonymous,
    }),
  });

  if (!res.ok) {
    const status = res.status as ErrorType;

    throw new HttpError(status);
  }

  return res;
};

export const createUserHandler = async ({
  id,
  isAnonymous,
  token,
}: CreateUserSchema): Promise<ReturnCreateUser> => {
  const res = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id, isAnonymous }),
  });

  if (!res.ok) {
    const status = res.status as ErrorType;

    throw new HttpError(status);
  }

  const user = (await res.json()) as ReturnCreateUser;

  return user;
};
export const useUser = () => {
  const createUser = useMutation({
    mutationFn: createUserHandler,
  });

  return {
    createMutateAsync: createUser.mutateAsync,
  };
};
