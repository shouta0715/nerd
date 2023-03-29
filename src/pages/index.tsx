import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { Layout } from "src/components/Layout/Layout";
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

type Props = {
  todayEpisodes: GetTodayEpisodesQuery;
  seasonWorks: GetSeasonWorksQuery;
  weeklyWorks: GetWeeklyWorksQuery;
};

const Home: NextPage<Props> = ({ todayEpisodes, seasonWorks, weeklyWorks }) => (
  <Layout>
    <div className="container mx-auto space-y-1 bg-white">
      <section className="bg-gray-50 px-6 pb-4 pt-2">
        <TopTitle title="今日放送のエピソード" />
        <TodayEpisodeList data={todayEpisodes} />
        <Text
          align="center"
          className="mt-6 flex w-full items-center justify-center  text-blue-500 hover:underline"
          component="p"
          ff="Hiragino Sans"
        >
          <Link className="text-base md:text-lg" href="/list/todayEpisodes">
            今日のエピソードをもっと見る
          </Link>
          <ChevronRightIcon className="ml-1 h-5 w-5 stroke-blue-500" />
        </Text>
      </section>
      <section className="bg-indigo-50 px-6 pb-4 pt-2">
        <TopTitle title="今期のアニメ" />
        <ul className="grid grid-cols-1 gap-2  md:gap-4 lg:grid-cols-2">
          {seasonWorks.works?.map((work) => (
            <WorkItem
              key={`work-${work.id}`}
              isSeriesPage={false}
              work={work}
            />
          ))}
        </ul>
        <Text
          align="center"
          className="mt-6 flex w-full items-center justify-center  text-blue-500 hover:underline"
          component="p"
          ff="Hiragino Sans"
        >
          <Link className="text-base md:text-lg" href="/list/seasonWorks">
            今期のアニメをもっと見る
          </Link>
          <ChevronRightIcon className="ml-1 h-5 w-5 stroke-blue-500" />
        </Text>
      </section>
      <section className="bg-gray-50 px-6 pb-6 pt-2 ">
        <TopTitle title="今週のアニメ" />
        <ul className="grid grid-cols-1 gap-2  md:gap-4 lg:grid-cols-2">
          {weeklyWorks?.weekly_works?.map((work) => (
            <WorkItem key={`work-${work.id}`} work={work} />
          ))}
        </ul>
        <Text
          align="center"
          className="mt-6 flex w-full items-center justify-center  text-blue-500 hover:underline"
          component="p"
          ff="Hiragino Sans"
        >
          <Link className="text-base md:text-lg" href="/list/weeklyWorks">
            今週のアニメをもっと見る
          </Link>
          <ChevronRightIcon className="ml-1 h-5 w-5 stroke-blue-500" />
        </Text>
      </section>
    </div>
  </Layout>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const todayEpisodes = await getTodayEpisodes();
  const seasonWorks = await getSeasonWorks(18);
  const weeklyWorks = await getWeeklyWorks(10);

  return {
    props: {
      todayEpisodes,
      seasonWorks,
      weeklyWorks,
    },
  };
};
