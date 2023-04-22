import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { EpisodeMenuSkelton } from "src/components/Elements/Loader/loaders/EpisodeMenuSkelton";
import { Text } from "src/components/Elements/Text";
import { usePrefetchCommentEpisode } from "src/features/comments/api/usePrefetchCommentEpisode";
import { useTimerState } from "src/features/timer/store/timerStore";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { useUserState } from "src/store/user/userState";

const DynamicEpisodeMenu = dynamic(
  () =>
    import("src/features/episodes/components/EpisodeMenu").then(
      (mod) => mod.EpisodeMenu
    ),
  {
    ssr: false,
    loading: () => <EpisodeMenuSkelton />,
  }
);

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetEpisodeQuery;
  stop: () => void;
};

export const EpisodeNav: FC<Props> = ({ setIsChat, isChat, stop, data }) => {
  const prefetchComments = usePrefetchCommentEpisode();
  const router = useRouter();
  const user = useUserState((state) => state.user);
  const mode = useTimerState((state) => state.mode);

  return (
    <nav className="sticky top-0 z-10 flex h-10 items-center justify-between border-b border-solid border-b-slate-200 bg-white px-2 lg:static lg:h-auto lg:border-none">
      <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
        <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 after:h-7 after:w-7 after:content-['']">
          <button className="h-7 w-7 border-none" onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="h-full w-full" />
          </button>
          <div className=" flex h-full flex-1 items-center justify-around">
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm  font-bold text-indigo-500 transition-colors duration-300 md:text-base  ${
                isChat ? "border-0 border-b-2 border-solid" : "border-none"
              } ${
                mode === "up"
                  ? "border-b-pink-500 text-pink-500"
                  : "border-b-indigo-500 text-indigo-500"
              }`}
              component="button"
              onClick={() => setIsChat(true)}
            >
              チャット
            </Text>
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold text-indigo-500 transition-colors duration-300 md:text-base ${
                !isChat ? "border-0 border-b-2 border-solid " : "border-none"
              } ${
                mode === "up"
                  ? "border-b-pink-500 text-pink-500"
                  : "border-b-indigo-500 text-indigo-500"
              }`}
              color="indigo"
              component="button"
              onClick={() => {
                setIsChat(false);
                stop();
              }}
              onMouseEnter={() =>
                user && prefetchComments(data?.episodes_by_pk?.id)
              }
              onTouchStart={() =>
                user && prefetchComments(data?.episodes_by_pk?.id)
              }
            >
              コメント
            </Text>
          </div>
        </div>
        <DynamicEpisodeMenu episode={data?.episodes_by_pk} />
      </div>
    </nav>
  );
};
