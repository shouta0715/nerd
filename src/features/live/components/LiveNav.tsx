import {
  ArrowSmallLeftIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, Suspense, useState } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";

import { Text } from "src/components/Elements/Text";
import { NextEpisodeMenu } from "src/features/episodes/components/NextEpisodeMenu";
import { LiveTimer } from "src/features/timer/types";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetEpisodeQuery;
  mode: LiveTimer["mode"];
};

const DynamicLiveMenu = dynamic(
  () =>
    import("src/features/live/components/LiveMenu").then((mod) => mod.LiveMenu),
  {
    ssr: false,
    loading: () => <Skeleton theme="episodeMenu" />,
  }
);

export const LiveNav: FC<Props> = ({ isChat, setIsChat, data, mode }) => {
  const router = useRouter();
  const [isEpisodeMenuOpen, setIsEpisodeMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 flex h-10 items-center justify-between border-0 border-b border-solid border-b-slate-200 bg-white px-2 lg:static lg:h-auto lg:border-none">
      <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
        <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 lg:after:h-7 lg:after:w-7 lg:after:content-['']">
          <button className="h-7 w-7 border-none" onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="h-full w-full" />
          </button>
          <ul className=" flex h-full flex-1 items-center justify-around">
            <Text
              className={`inline-block cursor-pointer rounded-none  py-2 text-sm font-bold  md:text-base  ${
                isChat ? "border-0 border-b-2 border-solid" : "border-none"
              } ${
                mode === "up"
                  ? "border-orange-500 text-orange-500"
                  : "border-indigo-500 text-indigo-500"
              }`}
              component="button"
              onClick={() => setIsChat(true)}
            >
              チャット
            </Text>
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold md:text-base ${
                !isChat ? "border-0 border-b-2 border-solid " : "border-none"
              } ${
                mode === "up"
                  ? "border-orange-500 text-orange-500"
                  : "border-indigo-500 text-indigo-500"
              }`}
              color="indigo"
              component="li"
              onClick={() => {
                setIsChat(false);
              }}
            >
              コメント
            </Text>
          </ul>
          <button
            className="h-7 w-7 transition-transform active:translate-y-0.5 lg:hidden"
            onClick={() => setIsEpisodeMenuOpen(!isEpisodeMenuOpen)}
          >
            <ListBulletIcon />
          </button>
        </div>
        <DynamicLiveMenu />
        <div className="hidden h-px w-full bg-slate-200 lg:block" />
        <Suspense
          fallback={<Skeleton props={{ isHidden: true }} theme="nextMenu" />}
        >
          <NextEpisodeMenu
            episode={data?.episodes_by_pk}
            isOpen={isEpisodeMenuOpen}
            mode={mode}
            setIsOpen={setIsEpisodeMenuOpen}
          />
        </Suspense>
      </div>
    </nav>
  );
};
