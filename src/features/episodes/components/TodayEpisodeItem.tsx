import { Button, Text, Title } from "@mantine/core";
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
  <li className="flex-1 rounded-md bg-white p-4 md:px-6">
    <div className="mx-auto flex min-h-full flex-col items-center justify-between">
      <Title order={3} size="h4" className="mb-1 md:mb-2">
        {episode.work.series_title}
      </Title>
      <div className="mb-2 flex w-full text-base">
        <Text className="mr-4">{episode.number}.</Text>
        <Text>{episode.title}</Text>
      </div>
      {genTimerStatus(episode.start_time, episode.end_time).timer ? (
        <Timer
          start_time={episode.start_time}
          id={episode.id}
          text={genTimerStatus(episode.start_time, episode.end_time).status}
        />
      ) : (
        <div>
          <Button className="mr-4" color="red">
            アーカイブで参加する
          </Button>
        </div>
      )}
      <div className="mt-2 flex w-full justify-around text-sm">
        {genTimerStatus(episode.start_time, episode.end_time).timer ? (
          <>
            <LikeButton
              likeCount={episode.episode_likes_aggregate.aggregate?.count ?? 0}
              debounceTime={1500}
              episodeId={episode.id}
            />
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
