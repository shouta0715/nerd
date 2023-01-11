/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable consistent-return */
import { RefObject, useEffect } from "react";
import { useCommentScrollStore } from "../../store/comment/commentType";

type Props = {
  commentLength?: number;
  ref: RefObject<HTMLDivElement>;
};

export const useScrollTrigger = ({ commentLength, ref }: Props) => {
  const isScroll = useCommentScrollStore((state) => state.isScroll);
  const setIsScroll = useCommentScrollStore((state) => state.setIsScroll);

  const onScrollPositionChange = (position: { x: number; y: number }) => {
    if (commentLength === undefined || !ref.current) return;

    const endPosition = ref.current?.scrollHeight - ref.current?.clientHeight;

    if (endPosition === position.y) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  useEffect(() => {
    if (commentLength === undefined || !ref.current) return;
    if (!isScroll) {
      ref.current?.scrollTo({
        top: ref.current?.scrollHeight,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentLength, ref]);

  return { onScrollPositionChange };
};
