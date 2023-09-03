import React, { FC } from "react";
import { Reactions } from "src/features/reactions/common/components/Reactions";
import { useWorkReactions } from "src/features/reactions/works/hooks/useWorkReactions";

type Props = {
  work_id: number;
};

export const WorkReactions: FC<Props> = ({ work_id }) => {
  const { onSubmitHandler, data } = useWorkReactions(work_id);

  return <Reactions data={data} onSubmitHandler={onSubmitHandler} />;
};
