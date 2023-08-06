import React, { FC } from "react";
import { Comments } from "src/features/comments/common/components/Comments";
import { useCommentsWork } from "src/features/comments/works/hooks/useCommentsWork";

type Props = {
  work_id: number;
};

export const WorkComments: FC<Props> = ({ work_id }) => {
  const { data, ref, hasNextPage, isLoading, refetchHandler, order } =
    useCommentsWork(work_id);

  return (
    <Comments
      ref={ref}
      data={data}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      mutateKey={[
        "comments",
        {
          work_id,
          order,
        },
      ]}
      refetchHandler={refetchHandler}
    />
  );
};
