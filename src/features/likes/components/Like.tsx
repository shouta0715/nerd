import { HeartIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { useLike } from "src/features/likes/hooks/useLike";

type Props = {
  is_like: boolean;
  like_count: number;
  comment_id: string;
};

export const Like: FC<Props> = ({ is_like, like_count, comment_id }) => {
  const { handleLike, isLike, likeCount } = useLike({
    is_like,
    like_count,
    comment_id,
  });

  return (
    <button className="group flex items-center" onClick={handleLike}>
      <HeartIcon
        className={`h-5 w-5 transition-transform group-active:scale-90 ${
          isLike
            ? "fill-pink-500 text-pink-500"
            : "text-gray-500 group-hover:text-pink-500"
        }`}
      />
      <span
        className={`ml-1 text-sm ${
          isLike ? "text-pink-500 " : "text-gray-500 group-hover:text-pink-500"
        }`}
      >
        {likeCount}
      </span>
    </button>
  );
};
