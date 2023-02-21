import { useGetNextEpisodeIdQuery } from "src/generated/graphql";
import { getClient } from "src/utils/getClient";

type Args = {
  workId?: number;
  episodeNumber?: number;
  hasNextEpisode?: boolean;
};

export const useQueryNextEpisodeId = ({
  workId,
  episodeNumber,
  hasNextEpisode,
}: Args) => {
  const { request } = getClient();

  return useGetNextEpisodeIdQuery(
    request,
    {
      work_id: workId as number,
      number: (episodeNumber as number) + 1,
    },
    {
      enabled: !!workId && !!episodeNumber && hasNextEpisode,
      staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
      cacheTime: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  );
};
