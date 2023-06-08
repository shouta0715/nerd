import {
  ArrowSmallLeftIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { FC, Suspense, useState } from "react";
import { Menu } from "src/components/Elements/Menu";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { usePrefetchCommentEpisode } from "src/features/comments/api/usePrefetchCommentEpisode";
import { NextEpisodeMenu } from "src/features/episodes/components/NextEpisodeMenu";
import { useTimerState } from "src/features/timer/store";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { useUserState } from "src/store/user/userState";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetEpisodeQuery;
};

export const EpisodeNav: FC<Props> = ({ setIsChat, isChat, data }) => {
  const prefetchComments = usePrefetchCommentEpisode();
  const router = useRouter();
  const user = useUserState((state) => state.user);
  const mode = useTimerState((state) => state.mode);
  const [isEpisodeMenuOpen, setIsEpisodeMenuOpen] = useState(false);
  const stop = useTimerState((state) => state.interval.stop);

  return (
    <nav className="sticky top-0 z-10 flex h-10 items-center justify-between border-b border-solid border-b-slate-200   px-6 lg:static lg:h-auto lg:border-none">
      <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
        <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 lg:after:h-7 lg:after:w-7 lg:after:content-['']">
          <button className="h-7 w-7 border-none" onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="h-full w-full" />
          </button>
          <div className=" flex h-full flex-1 items-center justify-around">
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm  font-bold text-indigo-500 transition-colors duration-300 md:text-base  ${
                isChat ? "border-0 border-b-2 border-solid" : "border-none"
              } ${
                mode === "up"
                  ? "border-b-orange-500 text-orange-500"
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
                  ? "border-b-orange-500 text-orange-500"
                  : "border-b-indigo-500 text-indigo-500"
              }`}
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
          <button
            className="h-7 w-7 transition-transform active:translate-y-0.5 lg:hidden"
            onClick={() => setIsEpisodeMenuOpen(!isEpisodeMenuOpen)}
          >
            <ListBulletIcon />
          </button>
        </div>
        <Menu />
        <div className="hidden h-px w-full bg-slate-200 lg:block" />
        <Suspense
          fallback={
            <Skeleton
              props={{
                isHidden: true,
              }}
              theme="nextMenu"
            />
          }
        >
          <NextEpisodeMenu
            episode={data?.episodes_by_pk}
            isOpen={isEpisodeMenuOpen}
            setIsOpen={setIsEpisodeMenuOpen}
          />
        </Suspense>
      </div>
    </nav>
  );
};
