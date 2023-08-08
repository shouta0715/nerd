import { graphql } from "msw";
import { generateInfiniteChats } from "src/features/chats/episodes/mocks/fixture";
import {
  GetChatsEpisodeQuery,
  GetChatsEpisodeQueryVariables,
} from "src/gql/graphql";

export const mswInfiniteChats = (status?: number, delay = 500) => {
  return graphql.query<GetChatsEpisodeQuery, GetChatsEpisodeQueryVariables>(
    "GetChatsEpisode",
    (req, res, ctx) => {
      if (status) {
        return res(ctx.delay(delay), ctx.status(status));
      }

      return res(ctx.data(generateInfiniteChats(req.variables)));
    }
  );
};
