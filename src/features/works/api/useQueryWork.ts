import { useGetWorkQuery } from "src/graphql/work/workQuery.generated";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | undefined;
  work: string | string[] | undefined;
};

export const useQueryWork = ({ slug, work }: Args) =>
  useGetWorkQuery(
    client,
    {
      id: Number(slug?.at(-1)),
    },
    {
      enabled: !!slug,
      placeholderData: () => {
        if (!slug || !work || typeof work === "string") return undefined;

        const [title, series_title] = work;

        return {
          works_by_pk: {
            id: Number(slug),
            title,
            series_title,
          },
        };
      },
    }
  );
