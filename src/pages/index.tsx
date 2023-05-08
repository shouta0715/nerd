import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import {
  getSeasonWorks,
  getTodayEpisodes,
  getWeeklyWorks,
} from "src/features/lists/api/router";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import {
  GetSeasonWorksQuery,
  GetWeeklyWorksQuery,
} from "src/graphql/work/workQuery.generated";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

type Props = {
  todayEpisodes: GetTodayEpisodesQuery;
  seasonWorks: GetSeasonWorksQuery;
  weeklyWorks: GetWeeklyWorksQuery;
  buildDate: string;
};

const Page: NextPageWithLayout<Props> = ({
  todayEpisodes,
  seasonWorks,
  weeklyWorks,
  buildDate,
}) => (
  <div className="space-y-1 bg-white">
    <section className="bg-gray-50 px-3 py-6 md:px-6">
      <TopTitle buildDate={buildDate} title="今日放送のエピソード" />
      <TodayEpisodeList data={todayEpisodes} />
      <Text
        align="center"
        className="mt-6 flex w-full items-center justify-center  font-semibold text-indigo-500 hover:underline"
        component="p"
        ff="Hiragino Sans"
      >
        <Link className="text-base  md:text-lg" href="/list/todayEpisodes">
          今日のエピソードをもっと見る
        </Link>
        <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-500" />
      </Text>
    </section>
    <section className=" bg-indigo-50 px-3 py-10 shadow-[0_0_0_100vmax_rgba(238_242_255)] [clip-path:inset(0_-100vmax)] md:px-6">
      <TopTitle buildDate={buildDate} title="今期のアニメ" />
      <ul className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {seasonWorks.works?.map((work) => (
          <WorkItem key={`work-${work.id}`} isSeriesPage={false} work={work} />
        ))}
      </ul>
      <Text
        align="center"
        className="mt-6 flex w-full items-center justify-center  font-semibold text-indigo-500 hover:underline"
        component="p"
        ff="Hiragino Sans"
      >
        <Link className="text-base md:text-lg" href="/list/seasonWorks">
          今期のアニメをもっと見る
        </Link>
        <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-500" />
      </Text>
    </section>
    <section className=" bg-gray-50 px-3 pt-10 md:px-6 md:pb-10">
      <TopTitle buildDate={buildDate} title="今週のアニメ" />
      <ul className="grid grid-cols-1 gap-6  md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {weeklyWorks?.weekly_works?.map((work) => (
          <WorkItem key={`work-${work.id}`} work={work} />
        ))}
      </ul>
      <Text
        align="center"
        className="mt-6 flex w-full items-center justify-center  font-semibold text-indigo-500 hover:underline"
        component="p"
        ff="Hiragino Sans"
      >
        <Link className="text-base md:text-lg" href="/list/weeklyWorks">
          今週のアニメをもっと見る
        </Link>
        <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-500" />
      </Text>
    </section>
  </div>
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "Nerd");

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const todayEpisodes = await getTodayEpisodes();
  const seasonWorks = await getSeasonWorks(12);
  const weeklyWorks = await getWeeklyWorks(12);
  const buildDate = new Date().toLocaleDateString("ja-JP", {
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
    hour: "numeric",
    minute: "numeric",
  });

  return {
    props: {
      todayEpisodes,
      seasonWorks,
      weeklyWorks,
      buildDate: `${buildDate}`,
    },
  };
};
