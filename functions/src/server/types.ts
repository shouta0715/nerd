import {z} from "zod";
import {CreateUserMutation, GetUserQuery} from "../user/types";
import {Response} from "firebase-functions/v1";
import {Request} from "firebase-functions/v1/https";

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

export type ReturnCreateUser =
  | {
      data: CreateUserMutation;
      message: string;
    }
  | ReturnError;

export const refreshSchema = z.string();

export type RefreshSchema = z.infer<typeof refreshSchema>;

export type ReturnRefreshToken =
  | {
      message: string;
      data: RefreshSchema;
    }
  | ReturnError;

type ApiResponse<T> = Response<T>;

export type Next<T> = (req: Request, res: ApiResponse<T>) => void;
