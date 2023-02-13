/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HeartIcon } from "@heroicons/react/24/outline";
import React, { FC, memo, useState } from "react";
import { useDebounce } from "src/hooks/useDebounce";

type Props = {
  onClickHandler: () => void;
  debounceTime?: number;
  liked: boolean;
  likeCount: number;
};

export const LikeButton: FC<Props> = memo(
  ({ onClickHandler, liked, likeCount, debounceTime = 1000 }) => {
    const [isLiked, setIsLiked] = useState(liked);
    const [count, setCount] = useState(likeCount);

    const debounce = useDebounce(debounceTime);

    return (
      <div
        onClick={() => {
          setIsLiked((prev) => !prev);
          setCount((prev) => (isLiked ? prev - 1 : prev + 1));
          debounce(onClickHandler);
        }}
        role="button"
        className="group flex cursor-pointer items-center space-x-2"
      >
        <HeartIcon
          className={`h-6 w-6 cursor-pointer ${
            isLiked
              ? "fill-pink-500 text-pink-500"
              : "text-black group-hover:text-pink-500"
          }`}
        />
        <span
          className={`${
            isLiked ? "text-pink-500" : "text-black group-hover:text-pink-500"
          }`}
        >
          {count}
        </span>
      </div>
    );
  }
);
