import React, { FC } from "react";
import { useInfiniteFinishComments } from "src/features/comments/api/useInfiniteFinishComments";

type Props = {
  episode_id: string;
};

const FinishComments: FC<Props> = ({ episode_id }) => {
  const { data } = useInfiniteFinishComments(episode_id);

  return (
    <div>
      {data?.pages.map((page) =>
        page.finish_comments.map((comment) => (
          <div key={comment.id}>{comment.content}</div>
        ))
      )}
    </div>
  );
};

export default FinishComments;
