/* eslint-disable @typescript-eslint/no-explicit-any */

import { episodeDocument } from "src/documents/episodes";
import { getEpisodePlaceholder } from "src/features/episodes/utils";
import { GetEpisodeQuery, GetEpisodeQueryVariables } from "src/gql/graphql";
import { useGraphQL } from "src/hooks/useGraphQL";

export const useQueryEpisode = (
  id: string | string[] | undefined,
  episode: string | string[] | undefined
) => {
  return useGraphQL<GetEpisodeQuery, GetEpisodeQueryVariables>({
    document: episodeDocument,
    options: {
      enabled: !!id,
      placeholderData: () => {
        if (!episode || typeof episode === "string") return undefined;

        return getEpisodePlaceholder(episode);
      },
      staleTime: 1000 * 60 * 30,
    },
    variables: {
      id,
    },
  });
};
