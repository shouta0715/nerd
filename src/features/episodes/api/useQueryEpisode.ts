/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import { useGetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useQueryEpisode = (
  id: string | string[] | undefined,
  episode: string | string[] | undefined
) => {
  const router = useRouter();

  return useGetEpisodeQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
      onSuccess: (data) => {
        if (!data.episodes_by_pk) {
          router.replace("/404");
        }
      },
      placeholderData: () => {
        if (!episode || typeof episode === "string") return undefined;
        const [
          series_title,
          title,
          number,
          episode_id,
          has_next_episode,
          start_time,
          end_time,
        ] = episode;

        return {
          episodes_by_pk: {
            id: episode_id,
            title,
            number: +number,
            has_next_episode: has_next_episode === "true",
            start_time,
            end_time,
            work: {
              series_title,
              title,
              id: 0,
              series_id: series_title,
              has_episodes: true,
            },
          },
        };
      },
    }
  );
};
