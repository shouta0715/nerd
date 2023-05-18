import { useGetSeriesQuery } from "src/graphql/work/workQuery.generated";
import { NotFoundError } from "src/libs/error";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | null;
};

export const useQuerySeries = ({ slug }: Args) => {
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
    }
  );
};
