import { PlusIcon, ShareIcon } from "@heroicons/react/24/outline";
import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { IconStack2 } from "@tabler/icons";
import Link from "next/link";
import React, { FC, memo } from "react";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { Work } from "src/features/works/types";

type Props = {
  work: Work;
};

export const WorkItem: FC<Props> = memo(({ work }) => (
  <li
    className="max-w-mds relative w-full flex-1 rounded-md border border-solid border-slate-200 bg-white p-3 drop-shadow-sm md:p-4"
    key={`works-${work.id}`}
  >
    <div className="mx-auto flex h-full min-h-full flex-col items-center justify-around">
      <Text
        href="/"
        variant="link"
        color="dark"
        component={Link}
        ff="Hiragino Sans"
        className="mb-2 text-sm font-bold md:mb-3 md:text-base"
      >
        {work.series_title}
      </Text>
      <div className="flex h-full w-full flex-1 flex-col border-x-0 border-y-0 border-b border-solid border-slate-200 pb-2">
        <ul className="mb-2 grid h-full w-full flex-1  grid-cols-2 items-center justify-around text-base">
          {work.episodes.map((episode) => (
            <WorkEpisodeItem episode={episode} key={`work-${episode.id}`} />
          ))}
        </ul>
        <Button
          leftIcon={<IconStack2 size={20} strokeWidth={1.5} />}
          color="gray.8"
          className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid px-2 py-2 text-center text-xs font-bold text-white md:py-2 md:px-4 md:text-sm"
        >
          他のエピソードを見る
        </Button>
      </div>
      <Group
        position="apart"
        className="mt-2 w-full items-center justify-around md:justify-between"
      >
        <div className="flex flex-col items-center justify-center">
          <ActionIcon color="dark" className="mb-1" variant="transparent">
            <PlusIcon className="h-5 w-5 stroke-2 md:h-6 md:w-6" />
          </ActionIcon>
          <Text component="span" className="text-xs">
            マイリスト
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ActionIcon color="dark" className="mb-1" variant="transparent">
            <ShareIcon className=" h-5 w-5 stroke-2 md:h-6 md:w-6" />
          </ActionIcon>
          <Text component="span" className="text-xs">
            シェア
          </Text>
        </div>
        <Button
          variant="filled"
          color="indigo.6"
          size="xs"
          className="flex flex-col items-center justify-center px-2 "
        >
          シリーズ一覧
        </Button>
      </Group>
    </div>
  </li>
));
