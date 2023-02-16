import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect, useMemo } from "react";
import { useQuerySeasonWorks } from "src/features/works/api/useQuerySeasonWorks";
import { useSearchInputState } from "src/store/input/serchInput";
import { AutoCompleteData } from "src/types/dataType";

type Props = {
  callbackTitle?: (items: AutoCompleteData[] | undefined) => void;
};

export const SeasonWorksList: FC<Props> = memo(({ callbackTitle }) => {
  const { data } = useQuerySeasonWorks();
  const { pathname } = useRouter();
  const indexPage = pathname === "/";
  const searchInput = useSearchInputState((state) => state.searchInput);
  const limit = indexPage ? 16 : data?.works.length;
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const filterEpisodes = useMemo(
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

  return (
    <>
      <ul>
        {filterEpisodes?.map((work) => (
          <li key={`works-${work.id}`}>{work.series_title}</li>
        ))}
      </ul>
      {indexPage && (
        <Text
          align="center"
          component="p"
          className="mt-6 flex w-full items-center justify-center text-lg hover:underline"
        >
          <Link href="/lists/season" className="">
            今期のアニメをもっと見る
          </Link>
          <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
        </Text>
      )}
    </>
  );
});
