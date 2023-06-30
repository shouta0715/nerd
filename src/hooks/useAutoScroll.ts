import { useCallback, useEffect, useRef, useState } from "react";

export const useAutoScroll = () => {
  // 一番下にいる場合は自動でスクロールする
  // 手動でスクロールした場合は自動スクロールを無効にする

  const isBottom = useRef(true);
  const [isSelfScroll, isSetSelfScroll] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      isBottom.current = true;

      if (!isSelfScroll) return;
      isSetSelfScroll(false);
    } else {
      isBottom.current = false;

      if (isSelfScroll) return;
      isSetSelfScroll(true);
    }
  }, [isSelfScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isBottom, isSelfScroll };
};
