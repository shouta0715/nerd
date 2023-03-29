import {
  GetCommentsEpisodeQuery,
  GetRepliesQuery,
} from "src/graphql/comment/commentQuery.generated";

export type Comment = GetCommentsEpisodeQuery["comments"][0];

export type Reply = GetRepliesQuery["replies"][0];
