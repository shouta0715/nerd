import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { Comment } from "src/features/comments/components/Comment";
import { useComments } from "src/features/comments/hooks/useComments";

type Props = {
  episode_id: string;
};

const Comments: FC<Props> = ({ episode_id }) => {
  const { data, ref, hasNextPage } = useComments(episode_id);

  return (
    <ul className="relative mx-auto w-full flex-1 space-y-3 px-4 pt-4 pb-1  md:max-w-xl">
      {data?.pages.map((page) =>
        page.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
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
    </ul>
  );
};

export default Comments;
