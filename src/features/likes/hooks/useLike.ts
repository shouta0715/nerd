import { useState } from "react";
import { useMutateLike } from "src/features/likes/api/useMutateLike";
import { useDebounce } from "src/hooks/useDebounce";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  is_like: boolean;
  like_count: number;
  comment_id: string;
};

export const useLike = ({ comment_id, like_count, is_like }: Props) => {
  const [isLike, setIsLike] = useState(is_like);
  const [likeCount, setLikeCount] = useState(like_count);

  const { insertLike, deleteLike, isLoading } = useMutateLike();
  const debounce = useDebounce(500);
  const user = useUserState((state) => state.user);
  const setIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  const handleLike = async () => {
    if (user?.anonymous || !user) {
      setIsOpenModal(true);

      return;
    }

    setIsLike((prev) => !prev);
    setLikeCount((prev) => (isLike ? prev - 1 : prev + 1));

    if (isLoading) {
      return;
    }

    if (isLike) {
      debounce(async () => {
        await deleteLike.mutateAsync({
          user_id: user.id,
          comment_id,
        });
      });
    } else {
      debounce(async () => {
        await insertLike.mutateAsync({
          object: {
            comment_id,
          },
        });
      });
    }
  };

  return {
    isLike,
    likeCount,
    handleLike,
  };
};
