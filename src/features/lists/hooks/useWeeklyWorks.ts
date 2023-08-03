import { useEffect } from "react";
import { GetWeeklyWorksQuery } from "src/gql/graphql";
import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  data: GetWeeklyWorksQuery;
};

export const useWeeklyWorks = ({ data }: Props) => {
  const searchInput = useSearchInputState((state) => state.searchInput);
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);

  const filterWorks = data?.weekly_works.filter((works) =>
    works.series_title.toLowerCase().includes(searchInput.toLowerCase().trim())
  );

  useEffect(() => () => setSearchInput(""), [setSearchInput]);

  return { filterWorks };
};
