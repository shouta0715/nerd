import { useRouter } from "next/router";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";
import { GetEpisodeQuery } from "src/gql/graphql";

export const useLive = (data: GetEpisodeQuery) => {
  const router = useRouter();
  const { mode: chatMode } = router.query;

  const { mode, time, isAlreadyFinished } = useLiveTimer({
    start_time: data?.episodes_by_pk?.start_time,
    end_time: data?.episodes_by_pk?.end_time,
  });

  return {
    isChat: (chatMode ?? "chat") === "chat",
    mode,
    time,
    isAlreadyFinished,
  };
};
