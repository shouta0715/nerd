import { useGetSeriesQuery } from "src/graphql/work/workQuery.generated";
import { NotFoundError } from "src/libs/error";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | null;
  series_title: string | string[] | null;
};

export const useQuerySeries = ({ slug, series_title }: Args) => {
  return useGetSeriesQuery(
    client,
    {
      series_id: typeof slug === "string" ? slug : "",
    },
    {
      enabled: !!slug && typeof slug === "string",
      onSuccess: (data) => {
        if (!data.works || !data.works.length) {
          throw new NotFoundError();
        }
      },
      placeholderData: () => ({
        works: [
          {
            series_title: typeof series_title === "string" ? series_title : "",
            series_id: typeof slug === "string" ? slug : "",
            title: "",
            id: 0,
            has_episodes: undefined,
            episodes: [],
          },
        ],
      }),
    }
  );
};
