import { GetFinishCommentsQuery } from "src/graphql/comment/commentQuery.generated";

export type FinishComment = GetFinishCommentsQuery["finish_comments"][0];

export type ReplyComment =
  GetFinishCommentsQuery["finish_comments"][0]["finish_comments"][0];
