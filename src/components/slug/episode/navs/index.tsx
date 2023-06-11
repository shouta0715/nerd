import { ListBulletIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { usePrefetchCommentEpisode } from "src/features/comments/api/usePrefetchCommentEpisode";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { useUserState } from "src/store/user/userState";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetEpisodeQuery;
  response: "lg" | "sp";
};

export const Nav: FC<Props> = ({ setIsChat, isChat, data, response }) => {
  const prefetchComments = usePrefetchCommentEpisode();
  const user = useUserState((state) => state.user);
  const mode = useTimerState((state) => state.mode);
  const stop = useTimerState((state) => state.interval.stop);
  const [isNextEpisodeOpen, setIsNextEpisodeOpen] = useOpenState((state) => [
    state.isNextEpisodeOpen,
    state.setIsNextEpisodeOpen,
  ]);

  return (
    <nav
      className={clsx(
        `flex`,
        response === "lg"
          ? "hidden flex-1 items-center justify-around lg:flex"
          : "sticky top-0 z-20 justify-between border-b bg-white/80 px-2 before:h-7 before:w-7 before:content-[''] lg:hidden"
      )}
    >
      <Text
        className={`inline-block cursor-pointer rounded-none text-base  font-bold text-indigo-500 transition-colors duration-300 ${
          mode === "up" ? " text-orange-500" : " text-indigo-500"
        }`}
        component="button"
        onClick={() => setIsChat(true)}
      >
        チャット
      </Text>
      <Text
        className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold text-indigo-500 transition-colors duration-300 md:text-base ${
          !isChat ? "border-0 border-solid " : "border-none"
        } ${mode === "up" ? " text-orange-500" : " text-indigo-500"}`}
        component="button"
        onClick={() => {
          setIsChat(false);
          stop();
        }}
        onMouseEnter={() => user && prefetchComments(data?.episodes_by_pk?.id)}
        onTouchStart={() => user && prefetchComments(data?.episodes_by_pk?.id)}
      >
        コメント
      </Text>
      {response === "sp" && (
        <button
          className="h-7 w-7 transition-transform active:translate-y-0.5 lg:hidden"
          onClick={() => setIsNextEpisodeOpen(!isNextEpisodeOpen)}
        >
          <ListBulletIcon />
        </button>
      )}
    </nav>
  );
};
