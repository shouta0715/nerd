/* eslint-disable @typescript-eslint/no-explicit-any */

import { workDocument } from "src/documents/works";
import { genWorkPlaceholder } from "src/features/works/common/utils";
import { GetWorkQuery, GetWorkQueryVariables } from "src/gql/graphql";
import { useGraphQL } from "src/hooks/useGraphQL";

type Args = {
  slug: string | string[] | undefined;
  work: string | string[] | undefined;
};

export const useQueryWork = ({ slug, work }: Args) => {
  return useGraphQL<GetWorkQuery, GetWorkQueryVariables>({
    document: workDocument,
    variables: {
      id: Number(slug),
    },
    options: {
      enabled: !!slug,
      staleTime: 1000 * 60 * 30,
      placeholderData: () => {
        if (!slug || !work || typeof work === "string") return undefined;

        return genWorkPlaceholder({ data: work, slug });
      },
    },
  });
};
