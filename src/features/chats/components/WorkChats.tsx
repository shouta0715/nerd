import React, { FC, memo } from "react";
import { Chats } from "src/features/chats/components/Chats";
import { useChatsWork } from "src/features/chats/hooks/useChatsWork";

type Props = {
  work_id: number;
};

export const WorkChats: FC<Props> = memo(({ work_id }) => {
  const { data, bottomRef, isBottom, entry, time } = useChatsWork(work_id);

  return (
    <Chats
      bottomRef={bottomRef}
      chats={data}
      entry={entry}
      isBottom={isBottom}
      time={time}
    />
  );
});
