import { graphql } from "msw";
import { episodeChatData } from "src/features/chats/mocks/fixture";

export const handleEpisodeChat = (status?: number) => {
  return graphql.query("GetChatsEpisode", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeChatData));
  });
};
