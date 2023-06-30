import { useCallback, useEffect, useRef, useState } from "react";

export const useAutoScroll = () => {
  const isBottom = useRef(true);
  const [isSelfScroll, setIsSelfScroll] = useState(false);
  const prevScrollTop = useRef<null | number>(null);

  const handleScroll = useCallback(() => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;

    const distanceFromBottom = scrollHeight - clientHeight - scrollTop;

    if (
      prevScrollTop.current !== null &&
      distanceFromBottom > 100 &&
      prevScrollTop.current > scrollTop
    ) {
      isBottom.current = false;

      if (!isSelfScroll) setIsSelfScroll(true);
    } else if (scrollHeight - scrollTop <= clientHeight + 100) {
      isBottom.current = true;

      if (isSelfScroll) setIsSelfScroll(false);
    }

    prevScrollTop.current = scrollTop;
  }, [isSelfScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isBottom, isSelfScroll, prevScrollTop };
};
