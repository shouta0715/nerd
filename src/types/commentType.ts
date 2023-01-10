import { GetCommentsQuery } from "../generated/graphql";

export type Comment = GetCommentsQuery["comments"][0];

export type CommentInput = {
  content: string;
  spoiler: boolean;
};
