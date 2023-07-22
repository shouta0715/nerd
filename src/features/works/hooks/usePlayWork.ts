import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CommentsFilter } from "src/features/comments/types";
import { useTimerState } from "src/features/timer/store";
import { useQueryWork } from "src/features/works/api/useQueryWork";

export const usePlayWork = () => {
  const router = useRouter();
  const { slug, work, mode } = router.query;
  const { data, isLoading } = useQueryWork({ slug, work });

  const interval = useTimerState((state) => state.interval);
  const [filter, setFilter] = useState<CommentsFilter>("new");

  useEffect(() => interval.reset, [interval.reset]);

  return {
    data,
    isLoading,
    isChat: mode === "chat",
    filter,
    setFilter,
  };
};
