import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { Skeleton } from "src/components/Elements/Skeleton";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store";
import { getIsAlreadyFinished } from "src/features/timer/utils/getAlreadyFinished";

import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = { episode?: GetEpisodeQuery["episodes_by_pk"] };

export const NextButton: FC<Props> = ({ episode }) => {
  const { data, isLoading } = useQueryEpisode(
    episode?.next_episode_id,
    undefined
  );
  const interval = useTimerState((state) => state.interval);
  const timerMode = useTimerState((state) => state.mode);
  const onNotification = useNotificationState((state) => state.onShow);

  if (isLoading) return <Skeleton theme="nextButton" />;

  return (
    <ButtonLink
      className={` flex h-full w-36 items-center space-x-2 py-2 font-bold text-white sm:mx-0 sm:w-max ${
        timerMode === "up" ? "bg-orange-600" : "bg-indigo-600"
      }`}
      href={
        getIsAlreadyFinished(data?.episodes_by_pk?.end_time)
          ? `/episodes/${data?.episodes_by_pk?.id}`
          : `/episodes/live/${data?.episodes_by_pk?.id}`
      }
      leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
      onClick={() => {
        interval.reset();
        onNotification({
          type: "success",
          title: "次のエピソードへ移動しました。",
        });
      }}
      size="xs"
    >
      次のエピソードへ
    </ButtonLink>
  );
};
