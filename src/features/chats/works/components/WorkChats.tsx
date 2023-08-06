import React, { FC } from "react";
import { Chats } from "src/features/chats/common/components/Chats";
import { useChatsWork } from "src/features/chats/works/hooks/useChatsWork";

type Props = {
  work_id: number;
};

export const WorkChats: FC<Props> = ({ work_id }) => {
  const { data, time, isPending, isSelfScroll } = useChatsWork(work_id);

  return (
    <Chats
      chats={data}
      isPending={isPending}
      isSelfScroll={isSelfScroll}
      time={time}
    />
  );
};
