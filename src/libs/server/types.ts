import { z } from "zod";
import { GetUserQuery } from "src/graphql/user/userQuery.generated";

export const getUserSchema = z.object({
  id: z.string(),
});

export type CreateUserMutation = {
  __typename?: "mutation_root";
  insert_users_one?: {
    __typename?: "users";
    id: string;
    photo_url?: string | null;
    user_name: string;
  } | null;
};

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
});

export type CreateClaimsSchema = z.infer<typeof createClaimsSchema>;

export type ReturnCreateClaims = {
  message: string;
};

export type ReturnError = {
  message: string;
};

export type ReturnCreateUser = {
  data: CreateUserMutation;
  message: string;
};

export const refreshSchema = z.string();

export type RefreshSchema = z.infer<typeof refreshSchema>;

export type ReturnRefreshToken =
  | {
      message: string;
      data: RefreshSchema;
    }
  | ReturnError;
