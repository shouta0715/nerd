import {
  PlusIcon,
  ShareIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Text } from "src/components/Elements/Text";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { Work } from "src/features/works/types";

type Props = {
  work: Work;
};

export const WorkItem: FC<Props> = ({ work }) => (
  <li
    key={`works-${work.id}`}
    className="max-w-mds relative w-full flex-1 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:p-4"
  >
    <div className="mx-auto flex h-full min-h-full flex-col items-center justify-around">
      <Link
        as={
          work.series_id
            ? `/works/${work.id}?series=${work.series_id}`
            : `/works/${work.id}`
        }
        className="mb-2 font-hiragino-sans text-sm font-bold md:mb-3 md:text-base"
        href={{
          pathname: `/works/${work.id}`,
          query: {
            series: work.series_id ?? null,
            work: [work.title, work.series_title],
          },
        }}
      >
        {work.series_title}
      </Link>
      <div className="flex h-full w-full flex-1 flex-col border-x-0 border-y-0 border-b border-solid border-slate-200 pb-2">
        <ul className="mb-2 grid h-full w-full flex-1  grid-cols-2 items-center justify-around text-base">
          {work.episodes.map((episode) => (
            <WorkEpisodeItem
              key={`work-${episode.id}`}
              episode={episode}
              work_title={work.series_title}
            />
          ))}
        </ul>
        <ButtonLink
          as={
            work.series_id
              ? `/works/${work.id}?series=${work.series_id}`
              : `/works/${work.id}`
          }
          className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:py-2 md:px-4 md:text-sm"
          href={{
            pathname: `/works/${work.id}`,
            query: {
              series: work.series_id ?? null,
              work: [work.title, work.series_title],
            },
          }}
          leftIcon={<Square3Stack3DIcon className="h-5 w-5" />}
          size="xs"
        >
          他のエピソードを見る
        </ButtonLink>
      </div>
      <div className="mt-2 flex w-full items-center justify-around md:justify-between">
        <div className="flex flex-col items-center justify-center">
          <Button className="mb-1 border-none">
            <PlusIcon className="h-5 w-5 stroke-2 md:h-6 md:w-6" />
          </Button>
          <Text className="text-xs" component="span">
            マイリスト
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Button className="mb-1 border-none">
            <ShareIcon className=" h-5 w-5 stroke-2 md:h-6 md:w-6" />
          </Button>
          <Text className="text-xs" component="span">
            シェア
          </Text>
        </div>
        <Button
          className="flex flex-col items-center justify-center bg-indigo-500 px-1 py-2 font-bold text-white"
          size="xs"
        >
          シリーズ一覧
        </Button>
      </div>
    </div>
  </li>
);
