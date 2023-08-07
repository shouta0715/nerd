import { graphql } from "msw";
import { liveChatsData, liveData } from "src/features/live/mocks/fixture";
import {
  GetChatsQuery,
  GetChatsQueryVariables,
  GetEpisodeQuery,
  GetEpisodeQueryVariables,
} from "src/gql/graphql";
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
  return graphql.query<GetChatsQuery, GetChatsQueryVariables>(
    "GetChats",
    (_, res, ctx) => {
      if (status) {
        return res(ctx.status(status));
      }

      return res(ctx.data(liveChatsData()));
    }
  );
};

export const handlers = ({ mode }: { mode: Mode }) => {
  return [handleLive({ mode }), handleLiveChats()];
};
