import { graphql } from "msw";
import {
  episodeChatData,
  mutateEpisodeData,
  workChatData,
} from "src/features/chats/common/mocks/fixture";
import {
  GetChatsEpisodeQuery,
  GetChatsWorkQuery,
  InsertChatMutation,
  InsertChatMutationVariables,
} from "src/gql/graphql";

export const handleEpisodeChat = (status?: number) => {
  return graphql.query<GetChatsEpisodeQuery>(
    "GetChatsEpisode",
    (req, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(episodeChatData()));
    }
  );
};

export const handlerWorkChat = (status?: number) => {
  return graphql.query("GetChatsWork", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workChatData));
  });
};

export const handleMutateEpisodeChat = (status?: number) => {
  return graphql.mutation<InsertChatMutation, InsertChatMutationVariables>(
    "InsertChat",
    (req, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(mutateEpisodeData(req.variables)));
    }
  );
};

export const handleMutateWorkChat = (status?: number) => {
  return graphql.mutation<GetChatsWorkQuery, InsertChatMutation>(
    "InsertChat",
    (_, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(workChatData));
    }
  );
};

export const handlers = [
  handleEpisodeChat(),
  handlerWorkChat(),
  handleMutateEpisodeChat(),
  handleMutateWorkChat(),
];
