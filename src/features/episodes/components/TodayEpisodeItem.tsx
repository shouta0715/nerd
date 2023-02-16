import { Button, Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { CommentsButton } from "src/components/Elements/CommentsButton";
import { LikeButton } from "src/components/Elements/LikeButton";
import { ShareButton } from "src/components/Elements/ShareButton";
import { Timer } from "src/components/Elements/Timer";
import { UserGroupButton } from "src/components/Elements/UserGroupButton";
import { Episode } from "src/features/episodes/types";
import { genTimerStatus } from "src/utils/timerStatus";

type Props = {
  episode: Episode;
};

const TodayEpisodeItem: FC<Props> = memo(({ episode }) => (
  <li className="relative mx-auto max-w-lg flex-1 rounded-md bg-white p-4 shadow hover:bg-slate-50 md:px-6">
    <Link href="/today" className="absolute inset-0 rounded-md" />
    <div className="mx-auto flex min-h-full flex-col items-center justify-between">
      <Title order={3} size="h4" ff="Hiragino Sans" className="mb-1 md:mb-2">
        {episode.work.series_title}
      </Title>
      <div className="mb-2 flex w-full text-base">
        <Text className="mr-4">{episode.number}.</Text>
        <Text ff="Hiragino Sans">{episode.title}</Text>
      </div>
      {genTimerStatus(episode.start_time, episode.end_time).timer ? (
        <Timer
          start_time={episode.start_time}
          id={episode.id}
          text={genTimerStatus(episode.start_time, episode.end_time).status}
        />
      ) : (
        <div>
          <Button className="mr-4" color="red" variant="light">
            アーカイブで参加する
          </Button>
        </div>
      )}
      <div className="z-10 mt-2 flex w-full justify-around text-sm">
        {genTimerStatus(episode.start_time, episode.end_time).timer ? (
          <>
            <LikeButton debounceTime={1500} episodeId={episode.id} />
            <UserGroupButton
              count={10}
              onClickHandler={() => console.log("click")}
            />
            <ShareButton onClickHandler={() => console.log("share")} />
            <Button size="xs" radius="md" variant="light">
              参加する
            </Button>
          </>
        ) : (
          <>
            <CommentsButton
              count={10}
              onClickHandler={() => console.log("share")}
            />
            <ShareButton onClickHandler={() => console.log("share")} />
          </>
        )}
      </div>
    </div>
  </li>
));

export default TodayEpisodeItem;