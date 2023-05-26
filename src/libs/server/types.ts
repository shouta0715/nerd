import { NextApiResponse } from "next";
import { z } from "zod";
import {
  CreateUserMutation,
  DeleteUserMutation,
  GetUserQuery,
} from "src/graphql/user/userQuery.generated";

export const getUserSchema = z.object({
  id: z.string(),
});

export type GetUserSchema = z.infer<typeof getUserSchema>;

export type ReturnGetUser = GetUserQuery;

export const createUserSchema = z.object({
  id: z.string(),
  user_name: z.nullable(z.string()),
  photo_url: z.nullable(z.string()),
  isAnonymous: z.boolean(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export type ReturnCreateUser = {
  data: CreateUserMutation;
  message: string;
};

export const deleteUserSchema = z.object({
  id: z.string(),
});

export type DeleteUserSchema = z.infer<typeof deleteUserSchema>;

export type ReturnDeleteUser = {
  data: DeleteUserMutation;
  message: string;
};

export const createClaimsSchema = z.object({
  id: z.string(),
  isAnonymous: z.boolean(),
  refreshToken: z.string(),
});

export type CreateClaimsSchema = z.infer<typeof createClaimsSchema>;

export type ReturnCreateClaims = {
  message: string;
};

export type ReturnError = {
  message: string;
};

export type ApiResponse<T> = NextApiResponse<T | ReturnError>;
