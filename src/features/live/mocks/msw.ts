import { graphql } from "msw";
import { episodeChatData } from "src/features/chats/mocks/fixture";
import { liveData } from "src/features/live/mocks/fixture";
import {
  GetChatsEpisodeQuery,
  GetChatsEpisodeQueryVariables,
} from "src/graphql/chat/chatQuery.generated";
import {
  GetEpisodeQuery,
  GetEpisodeQueryVariables,
} from "src/graphql/episode/episodeQuery.generated";
import { Mode } from "src/tests/storybook";

export const handleLive = ({
  mode,
  status,
}: {
  mode: Mode;
  status?: number;
}) => {
  return graphql.query<GetEpisodeQuery, GetEpisodeQueryVariables>(
    "GetEpisode",
    (_, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(liveData(mode)));
    }
  );
};

export const handleLiveChats = (status?: number) => {
  return graphql.query<GetChatsEpisodeQuery, GetChatsEpisodeQueryVariables>(
    "GetChats",
    (_, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(episodeChatData));
    }
  );
};

export const handlers = ({ mode }: { mode: Mode }) => {
  return [handleLive({ mode }), handleLiveChats()];
};
