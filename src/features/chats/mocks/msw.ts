import { graphql } from "msw";
import {
  episodeChatData,
  workChatData,
} from "src/features/chats/mocks/fixture";
import {
  GetChatsEpisodeQuery,
  GetChatsWorkQuery,
  InsertChatMutation,
} from "src/gql/graphql";

export const handleEpisodeChat = (status?: number) => {
  return graphql.query("GetChatsEpisode", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeChatData));
  });
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
  return graphql.mutation<GetChatsEpisodeQuery, InsertChatMutation>(
    "InsertChat",
    (_, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(episodeChatData));
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
