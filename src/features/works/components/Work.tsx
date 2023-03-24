import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { useQueryWork } from "src/features/works/api/useQueryWork";

export const Work: FC = () => {
  const router = useRouter();
  const { slug, series, work } = router.query;
  const { data, isPlaceholderData, isLoading } = useQueryWork({
    slug,
    series_id: series,
    work,
  });

  if (isLoading) {
    return (
      <div className="w-full">
        <Loader className="mx-auto" />
      </div>
    );
  }

  return (
    <div>
      <h1>{data?.works_by_pk?.series_title}</h1>
      <ul className="flex flex-wrap">
        {isPlaceholderData
          ? "Loading..."
          : data?.works_by_pk?.episodes.map((episode) => (
              <WorkEpisodeItem key={episode.id} episode={episode} />
            ))}
      </ul>
      <ul>
        {isPlaceholderData
          ? "Loading"
          : data?.works.map((series_work) => (
              <li key={series_work.id}>
                <Link
                  href={`/works/${series_work.id}?series=${series_work.series_id}`}
                >
                  {series_work.series_title}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};
