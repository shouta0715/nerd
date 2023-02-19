import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Text } from "@mantine/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { TopTitle } from "src/components/Elements/TopTitle";
import { ListSkelton } from "src/components/Layout/loading/ListSkelton";

const DynamicTodayEpisodeList = dynamic(
  () =>
    import("src/features/episodes/components/TodayEpisodeList").then(
      (mod) => mod.TodayEpisodeList
    ),

  {
    ssr: false,
    loading: () => <ListSkelton length={8} />,
  }
);

export const TodayEpisodes: FC = () => {
  const { pathname } = useRouter();
  const indexPage = pathname === "/";

  return (
    <div className="px-6 pb-12 pt-6">
      <TopTitle href="/lists/today" title="今日放送のエピソード" />
      <DynamicTodayEpisodeList />
      {indexPage && (
        <Text
          align="center"
          component="p"
          className="mt-6 flex w-full items-center justify-center hover:underline"
        >
          <Link href="/lists/today" className="text-base md:text-lg">
            今日のエピソードをもっと見る
          </Link>
          <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
        </Text>
      )}
    </div>
  );
};
