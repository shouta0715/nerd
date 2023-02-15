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

type LikeState = {
  isLiked: boolean;
  clickCount: number;
};

export const LikeButton: FC<Props> = memo(
  ({ likeCount, debounceTime = 1000, episodeId }) => {
    const [likeState, setLikeState] = useState<LikeState>({
      isLiked: false,
      clickCount: 0,
    });
    const [count, setCount] = useState(likeCount);
    const user = useUserStore((state) => state.user);
    const setIsOpenModal = useGlobalStore((state) => state.setIsOpenModal);
    const debounce = useDebounce(debounceTime);
    const { data, isFetching } = useQueryLike(episodeId);
    const { insertLikesMutation, deleteLikeMutation } = useMutateEpisodeLike();

    useEffect(() => {
      const flag =
        data?.episode_likes_by_pk !== null &&
        data?.episode_likes_by_pk !== undefined;
      setLikeState({ isLiked: flag, clickCount: 0 });
    }, [data?.episode_likes_by_pk]);

    const onClickHandler = async () => {
      if (likeState.clickCount % 2 !== 0) return;

      if (likeState.isLiked) {
        await deleteLikeMutation.mutateAsync({
          userId: user?.id as string,
          episodeId,
        });
        setLikeState({ clickCount: 0, isLiked: false });
      } else {
        await insertLikesMutation.mutateAsync({
          object: {
            episode_id: episodeId,
          },
        });
        setLikeState({ clickCount: 0, isLiked: true });
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
          setLikeState((prev) => ({
            isLiked: !prev.isLiked,
            clickCount: prev.clickCount + 1,
          }));
          setCount((prev) => (likeState.isLiked ? prev - 1 : prev + 1));
          debounce(onClickHandler);
        }}
        role="button"
        className="group group flex cursor-pointer items-center space-x-2"
      >
        <HeartIcon
          className={`h-5 w-5 cursor-pointer group-disabled:animate-pulse group-disabled:text-slate-300 group-disabled:opacity-50 md:h-6  md:w-6  ${
            likeState.isLiked
              ? "fill-pink-500 text-pink-500"
              : "text-black group-hover:text-pink-500"
          }`}
        />
        <span
          className={`${
            likeState.isLiked
              ? "text-pink-500"
              : "text-black group-hover:text-pink-500"
          }`}
        >
          {count}
        </span>
      </UnstyledButton>
    );
  }
);
