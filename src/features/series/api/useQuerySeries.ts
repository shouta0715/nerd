import { useGetSeriesQuery } from "src/graphql/work/workQuery.generated";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | null;
};

export const useQuerySeries = ({ slug }: Args) =>
  useGetSeriesQuery(
    client,
    {
      series_id: typeof slug === "string" ? slug : "",
    },
    {
      enabled: !!slug && typeof slug === "string",
    }
  );
