import { GetUserQuery } from "../generated/graphql";

export type User = GetUserQuery["users_by_pk"];
