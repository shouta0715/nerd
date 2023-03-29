import React, { FC } from "react";
import { Comments } from "src/features/comments/components/Comments";
import { useCommentsWork } from "src/features/comments/hooks/useCommentsWork";

type Props = {
  work_id: number;
};

export const WorkComments: FC<Props> = ({ work_id }) => {
  const { data, ref, hasNextPage } = useCommentsWork(work_id);

  return <Comments ref={ref} data={data} hasNextPage={hasNextPage} />;
};
