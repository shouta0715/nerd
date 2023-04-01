import React, { FC } from "react";
import { EpisodeChats } from "src/features/chats/components/EpisodeChats";
import { ZeroTimeChats } from "src/features/live/components/ZeroTimeChats";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  episode_id: string;
};

export const LiveChat: FC<Props> = ({ episode_id }) => {
  const isCountDown = useTimerState((state) => state.isCountDown);

  return isCountDown ? (
    <ZeroTimeChats episode_id={episode_id} />
  ) : (
    <EpisodeChats episode_id={episode_id} />
  );
};
