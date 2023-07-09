import { z } from "zod";

export type CreateUserMutation = {
  __typename?: "mutation_root";
  insert_users_one?: {
    __typename?: "users";
    id: string;
  } | null;
};

export const createUserSchema = z.object({
  id: z.string(),
  isAnonymous: z.boolean(),
  token: z.string(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export const createClaimsSchema = z.object({
  id: z.string(),
  isAnonymous: z.boolean(),
  token: z.string(),
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
