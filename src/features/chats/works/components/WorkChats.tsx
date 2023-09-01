import React, { FC } from "react";
import { Chats } from "src/features/chats/common/components/Chats";
import { useChatsWork } from "src/features/chats/works/hooks/useChatsWork";
import { useWorkReactions } from "src/features/reactions/works/hooks/useWorkReactions";

type Props = {
  work_id: number;
};

export const WorkChats: FC<Props> = ({ work_id }) => {
  const { data, time, isPending, isSelfScroll } = useChatsWork(work_id);
  const { onSubmitHandler } = useWorkReactions(work_id);

  return (
    <Chats
      chats={data}
      isPending={isPending}
      isSelfScroll={isSelfScroll}
      onSubmitHandler={onSubmitHandler}
      time={time}
    />
  );
};
