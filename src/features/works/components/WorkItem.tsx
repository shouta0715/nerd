import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { Work } from "src/features/works/types";

type Props = {
  work: Work;
  isSeriesPage?: boolean;
};

export const WorkItem: FC<Props> = ({ work, isSeriesPage }) => (
  <li
    key={`works-${work.id}`}
    className="relative w-full flex-1 animate-fadeUp rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:p-4"
  >
    <div className="mx-auto flex h-full min-h-full flex-col items-center justify-around">
      {work.has_episodes ? (
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
          className="mb-2 font-hiragino-sans text-sm font-bold md:mb-3 md:text-base"
          href={{
            pathname: `${
              work.has_episodes ? `/works/${work.id}` : `/works/play/${work.id}`
            }`,
            query: {
              series: work.series_id ?? undefined,
              work: [work.title, work.series_title],
            },
          }}
        >
          {work.series_title}
        </Link>
      ) : (
        <div className="mb-2 font-hiragino-sans text-sm font-bold md:mb-3 md:text-base">
          {work.series_title}
        </div>
      )}

      <div className="flex h-full w-full flex-1 flex-col border-x-0 border-y-0  pb-2">
        {work.episodes.length > 0 ? (
          <ul className="peer mb-2 grid h-full w-full flex-1  grid-cols-2 items-center justify-around text-base">
            {work.episodes.map((episode) => (
              <WorkEpisodeItem
                key={`work-${episode.id}`}
                episode={episode}
                work_title={work.series_title}
              />
            ))}
          </ul>
        ) : (
          <p className="mb-2 flex h-full items-center justify-center text-sm text-dimmed">
            テレビ放送のアニメは放送日時になるとエピソードが追加されます。
          </p>
        )}

        {work.series_id && !isSeriesPage && (
          <ButtonLink
            as={`/series/${work.series_id}`}
            className="mx-auto mb-2 flex max-w-max flex-col items-center justify-center bg-indigo-500 px-1 py-2 font-bold text-white"
            href={{
              pathname: `/series/${work.series_id}`,
              query: { series_title: work.title },
            }}
            size="xs"
          >
            シリーズ一覧へ
          </ButtonLink>
        )}
        {work.has_episodes && work.episodes.length > 7 && (
          <ButtonLink
            as={
              work.series_id
                ? `/works/${work.id}?series=${work.series_id}`
                : `/works/${work.id}`
            }
            className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:px-4 md:py-2 md:text-sm"
            href={{
              pathname: `${`/works/${work.id}`}`,
              query: {
                series: work.series_id ?? undefined,
                work: [work.title, work.series_title],
              },
            }}
            leftIcon={<Square3Stack3DIcon className="h-5 w-5" />}
            size="xs"
          >
            他のエピソードを見る
          </ButtonLink>
        )}
      </div>
    </div>
  </li>
);
