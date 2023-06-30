import {z} from "zod";
import {CreateUserMutation, GetUserQuery} from "../../user/types";
import {Response} from "firebase-functions/v1";
import {Request} from "express";
import {UserRecord} from "firebase-functions/v1/auth";

export const getUserSchema = z.object({
  id: z.string(),
});

export type GetUserSchema = z.infer<typeof getUserSchema>;

export type ReturnGetUser = GetUserQuery;

export const createUserSchema = z.object({
  id: z.string(),
  isAnonymous: z.boolean(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export const createClaimsSchema = z.object({
  id: z.string(),
  isAnonymous: z.boolean(),
});

export type CreateClaimsSchema = z.infer<typeof createClaimsSchema>;

export type DeleteUserMutation = {
  __typename?: "mutation_root";
  delete_users_by_pk?: { __typename?: "users"; id: string } | null;
};

export type ReturnCreateClaims = {
  message: string;
};

export type ReturnError = {
  message: string;
};

export type ReturnCreateUser =
  | {
      data: CreateUserMutation;
      message: string;
    }
  | ReturnError;

type ApiResponse<T> = Response<T>;

export type Next<T> = (req: Request, res: ApiResponse<T>) => void;

export type AuthNext = (user: UserRecord) => void;
