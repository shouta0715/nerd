import {
  useMutateEpisodeCommentMutation,
  useMutateWorkCommentMutation,
} from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useMutateComment = () => {
  const insertEpisodeComment = useMutateEpisodeCommentMutation(client);
  const insertWorkComment = useMutateWorkCommentMutation(client);

  return {
    insertEpisodeComment,
    insertWorkComment,
  };
};
