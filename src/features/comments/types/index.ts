import {
  GetFinishCommentsQuery,
  GetReplyQuery,
} from "src/graphql/comment/commentQuery.generated";

export type FinishComment = GetFinishCommentsQuery["finish_comments"][0];

export type ReplyComment = GetReplyQuery["finish_comments"][0];
