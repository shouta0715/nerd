import { useInfiniteQuery } from "@tanstack/react-query";
import { LiveTimer } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useGetChatsEpisodeQuery } from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";

type PageParam = {
  _gte: number;
  _lt: number;
};

type UseInfiniteLiveChats = {
  episode_id: string;
  mode: LiveTimer["mode"];
  time: LiveTimer["time"];
  enabled: boolean;
};

type GetChats = {
  pageParam: PageParam;
} & Omit<UseInfiniteLiveChats, "time" | "enabled">;

const createInitialPageParams = ({
  mode,
  time,
}: Omit<UseInfiniteLiveChats, "episode_id" | "enabled">): PageParam => {
  const NumberTime = timeToSecond(
    mode === "up" ? time : { hours: 0, minutes: 0, seconds: 0 }
  );

  // upの場合は、0から現在の時間の200秒後の四捨五入までのデータを取得

  const InitialPageParams =
    mode === "up"
      ? { _gte: 0, _lt: Math.round(NumberTime / 100) * 100 + 200 }
      : {
          _gte: 0,
          _lt: 1,
        };

  return InitialPageParams;
};

const getChats = async ({ mode, episode_id, pageParam }: GetChats) => {
  const { _gte, _lt } = pageParam;

  const fetcher = useGetChatsEpisodeQuery.fetcher(client, {
    episode_id,
    get_limit: mode === "up" ? 40 : 100,
    _gte,
    _lt,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteLiveChats = ({
  mode,
  time,
  episode_id,
  enabled,
}: UseInfiniteLiveChats) => {
  const InitialPageParams = createInitialPageParams({ mode, time });

  const query = useInfiniteQuery({
    queryKey: ["LiveChats", { episode_id }],
    queryFn: ({ pageParam = InitialPageParams }) =>
      getChats({
        mode,
        episode_id,
        pageParam,
      }),
    keepPreviousData: true,
    enabled: mode !== "finish" && !!episode_id && enabled,
  });

  return { ...query, InitialPageParams };
};
