import { workSiresDocument } from "src/documents/works";
import { genSeriesWorkPlaceholder } from "src/features/works/utils";
import {
  GetWorkSeriesQuery,
  GetWorkSeriesQueryVariables,
} from "src/gql/graphql";
import { useGraphQL } from "src/hooks/useGraphQL";

type Args = {
  slug: string | string[] | undefined;
  series_id: string | string[] | undefined;
  work: string | string[] | undefined;
};

export const useQuerySeriesWork = ({ slug, series_id, work }: Args) => {
  return useGraphQL<GetWorkSeriesQuery, GetWorkSeriesQueryVariables>({
    document: workSiresDocument,
    variables: {
      id: Number(slug),
      series_id: series_id?.toString() ?? "",
    },
    options: {
      enabled: !!slug,
      placeholderData: () => {
        if (!work || typeof work === "string" || !slug) return undefined;

        return genSeriesWorkPlaceholder({ data: work, slug, series_id });
      },
      staleTime: 1000 * 60 * 5,
    },
  });
};
