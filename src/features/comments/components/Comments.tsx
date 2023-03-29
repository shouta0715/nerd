import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Comment } from "src/features/comments/components/Comment";
import { useCommentsEpisode } from "src/features/comments/hooks/useCommentsEpisode";

type Props = {
  episode_id: string;
};

const Comments: FC<Props> = ({ episode_id }) => {
  const { data, ref, hasNextPage } = useCommentsEpisode(episode_id);

  return (
    <ul className="relative mx-auto w-full flex-1 space-y-3 px-4 pb-1 pt-4  md:max-w-xl">
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
