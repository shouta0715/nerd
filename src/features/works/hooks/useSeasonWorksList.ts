import { useRouter } from "next/router";
import { useDeferredValue, useEffect, useMemo } from "react";
import { useQuerySeasonWorks } from "src/features/works/api/useQuerySeasonWorks";
import { useSearchInputState } from "src/store/input/serchInput";
import { AutoCompleteData } from "src/types/dataType";

type Props = {
  callbackTitle?: (items: AutoCompleteData[] | undefined) => void;
};

export const useSeasonWorksList = ({ callbackTitle }: Props) => {
  const { data } = useQuerySeasonWorks();
  const { pathname } = useRouter();
  const indexPage = pathname === "/";
  const searchInput = useSearchInputState((state) => state.searchInput);
  const limit = indexPage ? 16 : data?.works.length;
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const filterWorks = useMemo(
    () =>
      data?.works
        .slice(0, limit)
        .filter((works) =>
          works.series_title
            .toLowerCase()
            .includes(searchInput.toLowerCase().trim())
        ),
    [data?.works, limit, searchInput]
  );

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    callbackTitle &&
      callbackTitle(
        data?.works?.map((e) => ({
          title: e.series_title,
          value: e.series_title,
        }))
      );

    return () => {
      setSearchInput("");
    };
  }, [callbackTitle, data?.works, setSearchInput]);

  const deferredFilterWorks = useDeferredValue(filterWorks);

  return { deferredFilterWorks, indexPage };
};
