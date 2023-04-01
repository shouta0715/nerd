import React, { FC } from "react";
import { EpisodeChats } from "src/features/chats/components/EpisodeChats";
import { ZeroTimeChats } from "src/features/live/components/ZeroTimeChats";

type Props = {
  episode_id: string;
  isCountDown: boolean;
};

export const LiveChat: FC<Props> = ({ episode_id, isCountDown }) =>
  isCountDown ? (
    <ZeroTimeChats episode_id={episode_id} />
  ) : (
    <EpisodeChats episode_id={episode_id} />
  );
