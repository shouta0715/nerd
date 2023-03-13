import {
  GetCommentsQuery,
  GetRepliesQuery,
} from "src/graphql/comment/commentQuery.generated";

export type Comment = GetCommentsQuery["comments"][0];

export type Reply = GetRepliesQuery["comments"][0];
