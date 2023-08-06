import { searchWorksDocument } from "src/documents/works";
import { useGraphQL } from "src/hooks/useGraphQL";

export const useQuerySearchWorks = (q: string) => {
  return useGraphQL({
    document: searchWorksDocument,
    variables: { search: q, limit: 100 },
    options: { enabled: !!q, staleTime: 1000 * 60 * 5, suspense: false },
  });
};
