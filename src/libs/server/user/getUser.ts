import request from "graphql-request";
import { GET_USER } from "src/graphql/user/userQuery";
import { GetUserQuery } from "src/graphql/user/userQuery.generated";
import { ReturnGetUser } from "src/libs/server/types";

const url = process.env.NEXT_PUBLIC_ENDPOINT as string;

export const getUser = async (id: string): Promise<ReturnGetUser> =>
  request<GetUserQuery>(url, GET_USER, { id });
