import { Button, Text, Title } from "@mantine/core";
import React, { FC } from "react";
import { LikeButton } from "src/components/Elements/LikeButton";
import { ShareButton } from "src/components/Elements/ShareButton";
import { Timer } from "src/components/Elements/Timer";
import { UserGroupButton } from "src/components/Elements/UserGroupButton";
import { useQueryTodayEpisodes } from "src/features/episodes/api/useQueryTodayEpisodes";
import { Episode } from "src/features/episodes/types";

export const TodayEpisodeList: FC = () => {
  const { data } = useQueryTodayEpisodes();

  const sortFn = (target: Episode, next: Episode) => {
    const targetDate = new Date(target.start_time);
    const nextDate = new Date(next.start_time);

    return targetDate.getTime() - nextDate.getTime();
  };

  return (
    <ul className="flex flex-wrap gap-4 md:gap-6">
      {data?.episodes?.sort(sortFn).map((episode) => (
        <li key={episode.id} className="flex-1 rounded-md bg-white p-4 md:px-6">
          <div className="mx-auto flex min-h-full flex-col items-center justify-between">
            <Title order={3} className="mb-1 md:mb-2">
              {episode.work.series_title}
            </Title>
            <div className="mb-2 flex w-full text-base">
              <Text className="mr-4">{episode.number}.</Text>
              <Text>{episode.title}</Text>
            </div>
            <Timer start_time={episode.start_time} id={episode.id} />
            <div className="mt-2 flex w-full justify-around text-sm">
              <LikeButton
                likeCount={10}
                liked={false}
                debounceTime={3000}
                onClickHandler={() => console.log("click")}
              />
              <UserGroupButton
                count={10}
                onClickHandler={() => console.log("click")}
              />
              <ShareButton onClickHandler={() => console.log("share")} />
              <Button size="xs" radius="md" variant="light">
                参加する
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
