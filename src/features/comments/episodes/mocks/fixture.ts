import { CommentsFilter } from "src/features/comments/common/types";
import {
  GetCommentsEpisodeQuery,
  GetCommentsEpisodeQueryVariables,
} from "src/gql/graphql";
import { genRandomId } from "src/utils/client/genRandomId";

export const generateInfiniteComments = (
  order: CommentsFilter,
  { episode_id, cursor }: GetCommentsEpisodeQueryVariables
): GetCommentsEpisodeQuery => {
  const isPopular = order === "popular";

  const data: GetCommentsEpisodeQuery = {
    comments: Array.from(
      {
        length: 100,
      },
      (_, i) => {
        const created_at = new Date();
        created_at.setSeconds(created_at.getSeconds() - i);

        return {
          episode_id,
          user_id: genRandomId() + i,
          content: `comment ${cursor} ${i}`,
          created_at: created_at.toISOString(),
          id: genRandomId() + i,
          is_liked: false,
          commenter_name: genRandomId() + i,
          reply_count: Math.floor(Math.random() * 100),
          user: {
            id: genRandomId() + i,
            anonymous: false,
          },
          likes_aggregate: {
            aggregate: {
              count: isPopular ? 100 - i : Math.floor(Math.random() * 100),
            },
          },
        };
      }
    ),
  };

  return data;
};
