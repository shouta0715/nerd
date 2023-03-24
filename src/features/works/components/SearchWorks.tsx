/* eslint-disable no-nested-ternary */
import Link from "next/link";
import React from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { useSearchWorksState } from "src/features/works/store";

export const SearchWorks = () => {
  const [data, isLoading] = useSearchWorksState((state) => [
    state.data,
    state.isLoading,
  ]);

  if (isLoading) {
    return (
      <div className="w-full">
        <Loader className="mx-auto" />
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {data.map((work) => (
        <li key={work.id}>
          <Link
            as={
              work.series_id
                ? work.has_episodes
                  ? `/works/${work.id}?series=${work.series_id}`
                  : `/works/play/${work.id}?series=${work.series_id}`
                : work.has_episodes
                ? `/works/${work.id}`
                : `/works/play/${work.id}`
            }
            href={{
              pathname: `${
                work.has_episodes
                  ? `/works/${work.id}`
                  : `/works/play/${work.id}`
              }`,
              query: {
                series: work.series_id ?? undefined,
                work: [work.title, work.series_title],
              },
            }}
          >
            {work.series_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
