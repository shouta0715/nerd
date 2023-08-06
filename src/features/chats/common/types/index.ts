/* eslint-disable no-underscore-dangle */

import { GetChatsWorkQuery } from "src/gql/graphql";

export type Chat = GetChatsWorkQuery["chats_by_work_id"][0];

export type PageParams = {
  _gte: number;
  _lt: number;
};

export function isPageParams(obj: unknown): obj is PageParams {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "_gte" in obj &&
    typeof (obj as PageParams)._gte === "number" &&
    "_lt" in obj &&
    typeof (obj as PageParams)._lt === "number"
  );
}
