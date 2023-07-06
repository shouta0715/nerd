/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useQueryEpisode = (
  id: string | string[] | undefined,
  episode: string | string[] | undefined
) => {
  return useGetEpisodeQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
      placeholderData: () => {
        if (!episode || typeof episode === "string") return undefined;

        const [
          series_title,
          title,
          number,
          episode_id,
          has_next_episode,
          next_episode_id,
          start_time,
          end_time,
          work_id,
          series_id,
        ] = episode;

        return {
          episodes_by_pk: {
            id: episode_id,
            title,
            number: +number,
            has_next_episode: has_next_episode === "true",
            start_time: start_time === "" ? null : start_time,
            end_time: end_time === "" ? null : end_time,
            next_episode_id: next_episode_id === "" ? null : next_episode_id,
            work: {
              series_title,
              title,
              id: work_id === "" ? 0 : +work_id,
              series_id: series_id === "" ? null : series_id,
              has_episodes: true,
            },
          },
        };
      },
    }
  );
};
