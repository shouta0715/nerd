import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTimerState } from "src/features/timer/store";
import { useQueryWork } from "src/features/works/api/useQueryWork";

export const usePlayWork = () => {
  const router = useRouter();
  const { slug, work, mode } = router.query;
  const { data, isPending } = useQueryWork({ slug, work });

  const interval = useTimerState((state) => state.interval);

  useEffect(() => interval.reset, [interval.reset]);

  return {
    data,
    isPending,
    isChat: mode === "chat",
  };
};
