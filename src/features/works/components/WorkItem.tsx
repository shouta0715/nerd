import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
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
    className="relative w-full flex-1 animate-fadeUp  rounded-xl border border-slate-200 bg-white"
  >
    <div className="mx-auto flex h-full min-h-full flex-col items-center justify-around">
      <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-t-xl  bg-gray-800 p-3 text-white  md:p-4">
        <h3 className="line-clamp-2 font-hiragino-sans text-base font-bold">
          {work.series_title}
        </h3>
      </div>
      <div className="flex h-full w-full flex-1 flex-col p-3  md:p-4">
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
            className="mx-auto mb-2 flex max-w-max flex-col items-center justify-center"
            href={{
              pathname: `/series/${work.series_id}`,
              query: { series_title: work.title },
            }}
            size="sm"
            theme="primary"
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
            className="mx-auto flex w-full max-w-max items-center justify-center"
            href={{
              pathname: `${`/works/${work.id}`}`,
              query: {
                series: work.series_id ?? undefined,
                work: [work.title, work.series_title],
              },
            }}
            leftIcon={<Square3Stack3DIcon className="h-5 w-5" />}
            size="sm"
            theme="dark"
          >
            他のエピソードを見る
          </ButtonLink>
        )}
      </div>
    </div>
  </li>
);
