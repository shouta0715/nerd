import React, { FC } from "react";
import { Comments } from "src/features/comments/components/Comments";
import { useCommentsWork } from "src/features/comments/hooks/useCommentsWork";
import { CommentsFilter } from "src/features/comments/types";

type Props = {
  work_id: number;
  filter: CommentsFilter;
  setFilter: React.Dispatch<React.SetStateAction<CommentsFilter>>;
};

export const WorkComments: FC<Props> = ({ work_id, filter, setFilter }) => {
  const { data, ref, hasNextPage, isLoading } = useCommentsWork(
    work_id,
    filter
  );

  return (
    <Comments
      ref={ref}
      data={data}
      filter={filter}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      setFilter={setFilter}
    />
  );
};
