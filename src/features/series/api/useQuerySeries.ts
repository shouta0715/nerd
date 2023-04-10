import { useRouter } from "next/router";
import { useGetSeriesQuery } from "src/graphql/work/workQuery.generated";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | null;
};

export const useQuerySeries = ({ slug }: Args) => {
  const router = useRouter();

  return useGetSeriesQuery(
    client,
    {
      series_id: typeof slug === "string" ? slug : "",
    },
    {
      enabled: !!slug && typeof slug === "string",
      onSuccess: (data) => {
        if (!data.works || !data.works.length) {
          router.replace("/404");
        }
      },
      onError: () => {
        router.replace("/404");
      },
    }
  );
};
