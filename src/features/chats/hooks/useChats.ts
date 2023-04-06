import { useTimerState } from "src/features/timer/store/timerStore";
import { useInterSection } from "src/hooks/useInterSection";

export const useChats = () => {
  const time = useTimerState((state) => state.getTime());
  const { ref, entry } = useInterSection({
    root: null,
    rootMargin: "100px",
    threshold: 0,
  });

  return {
    bottomRef: ref,
    isBottom: entry?.isIntersecting,
    entry,
    time,
  };
};
