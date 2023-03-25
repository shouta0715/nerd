import { useQuery } from "@tanstack/react-query";
import {
  GetWorkSeriesQuery,
  useGetWorkSeriesQuery,
} from "src/graphql/work/workQuery.generated";

import { client } from "src/libs/graphqlClient";

type GetSeries = {
  id: string | string[] | undefined;
  series_id: string | string[] | undefined;
};

type Args = {
  slug: string | string[] | undefined;
  series_id: string | string[] | undefined;
  work: string | string[] | undefined;
};
const getSeriesWork = async ({ id, series_id }: GetSeries) => {
  if (!id) throw new Error("id is required");

  const fetcher = useGetWorkSeriesQuery.fetcher(client, {
    id: +id,
    series_id: series_id?.toString() ?? "",
  });

  const data = await fetcher();

  return data;
};

export const useQuerySeriesWork = ({ slug, series_id, work }: Args) =>
  useQuery<GetWorkSeriesQuery, Error>({
    queryKey: ["GetSeriesWork", { slug, series_id: series_id ?? null }],
    queryFn: () => getSeriesWork({ id: slug, series_id }),
    enabled: !!slug,
    placeholderData: () => {
      if (!work || typeof work === "string" || !slug) return undefined;
      const [title, series_title] = work;

      return {
        works_by_pk: {
          id: +slug,
          title,
          series_title,
          series_id: series_id?.toString() ?? "",
          has_episodes: false,
          episodes: [],
        },
        works: [],
      };
    },
    staleTime: 1000 * 60 * 5,
  });
