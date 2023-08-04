import {
  GetCommentsEpisodeQuery,
  GetCommentsWorkQuery,
  GetRepliesQuery,
  MutateEpisodeCommentMutationVariables,
  MutateWorkCommentMutationVariables,
} from "src/gql/graphql";

export type Comment = GetCommentsEpisodeQuery["comments"][0];

export type Reply = GetRepliesQuery["replies"][0];

export type CommentsFilter = "new" | "popular";
export type InfiniteCommentEpisode = {
  pageParams: {
    cursor: string;
    likes_cursor: number;
  }[];
  pages: GetCommentsEpisodeQuery[];
};

export type InfiniteCommentWork = {
  pageParams: {
    cursor: string;
    likes_cursor: number;
  }[];
  pages: GetCommentsWorkQuery[];
};

export type OptimisticMutateVariables =
  | MutateEpisodeCommentMutationVariables
  | MutateWorkCommentMutationVariables;
