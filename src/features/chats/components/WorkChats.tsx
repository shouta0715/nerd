import React, { FC, memo } from "react";
import { Chats } from "src/features/chats/components/Chats";
import { useChatsWork } from "src/features/chats/hooks/useChatsWork";

type Props = {
  work_id: number;
};

export const WorkChats: FC<Props> = memo(({ work_id }) => {
  const { data, time, isLoading, isSelfScroll } = useChatsWork(work_id);

  return (
    <Chats
      chats={data}
      isLoading={isLoading}
      isSelfScroll={isSelfScroll}
      time={time}
    />
  );
});
