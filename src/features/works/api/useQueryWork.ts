/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import { useGetWorkQuery } from "src/graphql/work/workQuery.generated";
import { client } from "src/libs/graphqlClient";

type Args = {
  slug: string | string[] | undefined;
  work: string | string[] | undefined;
};

export const useQueryWork = ({ slug, work }: Args) => {
  const router = useRouter();

  return useGetWorkQuery(
    client,
    {
      id: Number(slug?.at(-1)),
    },
    {
      enabled: !!slug,
      onSuccess: (data) => {
        if (!data.works_by_pk) {
          router.replace("/404");
        }
      },

      onError: (error: any) => {
        const message = error?.message;

        if (message.includes("unexpected null value for type")) {
          router.replace("/404");
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
