/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HeartIcon } from "@heroicons/react/24/outline";
import { UnstyledButton } from "@mantine/core";
import React, { FC, memo, useEffect, useState } from "react";
import { useMutateEpisodeLike } from "src/features/episodes/api/useMutateEpisodeLike";
import { useQueryLike } from "src/features/episodes/api/useQueryLike";
import { useDebounce } from "src/hooks/useDebounce";
import { useGlobalStore } from "src/store/global/globalStore";
import { useUserStore } from "src/store/user/userState";

type Props = {
  debounceTime: number;
  likeCount: number;
  episodeId: string;
};

export const LikeButton: FC<Props> = memo(
  ({ likeCount, debounceTime = 1000, episodeId }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [count, setCount] = useState(likeCount);

    const user = useUserStore((state) => state.user);
    const setIsOpenModal = useGlobalStore((state) => state.setIsOpenModal);
    const debounce = useDebounce(debounceTime);
    const { data, isFetching } = useQueryLike(episodeId);
    const [likeFlag, setLikeFlag] = useState(false);

    const { insertLikesMutation, deleteLikeMutation } = useMutateEpisodeLike();
    useEffect(() => {
      const flag =
        data?.episode_likes_by_pk !== null &&
        data?.episode_likes_by_pk !== undefined;
      setLikeFlag(flag);
      setIsLiked(flag);
    }, [data?.episode_likes_by_pk]);

    const onClickHandler = async () => {
      if (likeFlag !== isLiked) return;

      if (isLiked) {
        await deleteLikeMutation.mutateAsync({
          userId: user?.id as string,
          episodeId,
        });
      } else {
        await insertLikesMutation.mutateAsync({
          object: {
            episode_id: episodeId,
          },
        });
      }
    };

    return (
      <UnstyledButton
        disabled={isFetching || !user}
        onClick={() => {
          if (user?.anonymous) {
            setIsOpenModal(true);

            return;
          }
          setIsLiked((prev) => !prev);
          setCount((prev) => (isLiked ? prev - 1 : prev + 1));
          debounce(onClickHandler);
        }}
        role="button"
        className="group group flex cursor-pointer items-center space-x-2"
      >
        <HeartIcon
          className={`h-5 w-5 cursor-pointer group-disabled:animate-pulse group-disabled:text-slate-300 group-disabled:opacity-50 md:h-6  md:w-6  ${
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
      </UnstyledButton>
    );
  }
);
