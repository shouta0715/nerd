import { Loader } from "@mantine/core";
import React, { FC } from "react";
import { useFinishComments } from "src/features/comments/hooks/useFInishComments";

type Props = {
  episode_id: string;
};

const FinishComments: FC<Props> = ({ episode_id }) => {
  const { data, ref, hasNextPage } = useFinishComments(episode_id);

  return (
    <div className="w-full py-2">
      {data?.pages.map((page) =>
        page.finish_comments.map((comment) => (
          <div key={comment.id}>{comment.content}</div>
        ))
      )}

      <div
        ref={ref}
        className={`flex h-20 items-center justify-center text-center  ${
          hasNextPage ? "block" : "hidden"
        }`}
      >
        <Loader variant="oval" />
      </div>
    </div>
  );
};

export default FinishComments;
