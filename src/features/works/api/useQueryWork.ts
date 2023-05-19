/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetWorkQuery } from "src/graphql/work/workQuery.generated";
import { NotFoundError } from "src/libs/error";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | undefined;
  work: string | string[] | undefined;
};

export const useQueryWork = ({ slug, work }: Args) => {
  return useGetWorkQuery(
    client,
    {
      id: Number(slug),
    },
    {
      enabled: !!slug,
      onSuccess: (data) => {
        if (!data.works_by_pk) {
          throw new NotFoundError();
        }
      },
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
};
