import { graphql } from "msw";
import { generateInfiniteChats } from "src/features/chats/works/mocks/fixture";
import { GetChatsWorkQuery, GetChatsWorkQueryVariables } from "src/gql/graphql";

export const mswInfiniteChats = (status?: number, delay = 500) => {
  return graphql.query<GetChatsWorkQuery, GetChatsWorkQueryVariables>(
    "GetChatsWork",
    (req, res, ctx) => {
      if (status) {
        return res(ctx.delay(delay), ctx.status(status));
      }

      return res(ctx.data(generateInfiniteChats(req.variables)));
    }
  );
};
