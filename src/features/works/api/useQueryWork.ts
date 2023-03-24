import { useQuery } from "@tanstack/react-query";
import {
  GetWorkSeriesQuery,
  useGetWorkSeriesQuery,
} from "src/graphql/work/workQuery.generated";

import { client } from "src/libs/graphqlClient";

type GetWork = {
  id: string | string[] | undefined;
  series_id: string | string[] | undefined;
};

type Args = {
  slug: string | string[] | undefined;
  series_id: string | string[] | undefined;
  work: string | string[] | undefined;
};
const getWork = async ({ id, series_id }: GetWork) => {
  if (!id) throw new Error("id is required");

  const fetcher = useGetWorkSeriesQuery.fetcher(client, {
    id: +id,
    series_id: series_id?.toString() ?? "",
  });

  const data = await fetcher();

  return data;
};

export const useQueryWork = ({ slug, series_id, work }: Args) =>
  useQuery<GetWorkSeriesQuery, Error>({
    queryKey: series_id
      ? ["GetWorkSeries", { slug, series_id: series_id ?? null }]
      : ["GetWork", { slug }],
    queryFn: () => getWork({ id: slug, series_id }),
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
  });
