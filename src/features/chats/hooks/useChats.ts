import { useState } from "react";

import { useTimerState } from "src/features/timer/store/timerStore";
import { useInterSection } from "src/hooks/useInterSection";

export const useChats = () => {
  const time = useTimerState((state) => state.getTime());
  const { ref, entry } = useInterSection({
    root: null,
    rootMargin: "100px",
    threshold: 1,
  });
  const [isBottom, setIsBottom] = useState<boolean>(true);

  return {
    bottomRef: ref,
    isBottom,
    setIsBottom,
    entry,
    time,
  };
};
