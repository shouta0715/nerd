import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { Layout } from "src/components/Layout/Layout";
import {
  getSeasonWorks,
  getTodayEpisodes,
} from "src/features/lists/api/router";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = {
  todayEpisodes: GetTodayEpisodesQuery;
  seasonWorks: GetSeasonWorksQuery;
};

const Home: NextPage<Props> = ({ todayEpisodes, seasonWorks }) => (
  <Layout>
    <div className="container mx-auto flex flex-col space-y-2 bg-gray-50  md:flex-row">
      <div className="container mx-auto ">
        <section className="px-6 pt-2 pb-6">
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
        <section className="container mx-auto ">
          <div className="px-6">
            <TopTitle title="今期のアニメ" />
            <ul className="grid grid-cols-1 gap-2  md:gap-4 lg:grid-cols-2">
              {seasonWorks.works?.map((work) => (
                <WorkItem key={`work-${work.id}`} work={work} />
              ))}
            </ul>
            <Text
              align="center"
              className="my-6 flex w-full items-center justify-center  text-blue-500 hover:underline"
              component="p"
              ff="Hiragino Sans"
            >
              <Link className="text-base md:text-lg" href="/list/seasonWorks">
                今期のアニメをもっと見る
              </Link>
              <ChevronRightIcon className="ml-1 h-5 w-5 stroke-blue-500" />
            </Text>
          </div>
        </section>
      </div>
      <Link
        className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-indigo-500  shadow-md shadow-indigo-400 md:hidden"
        href="/search"
      >
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
      </Link>
    </div>
  </Layout>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const todayEpisodes = await getTodayEpisodes();
  const seasonWorks = await getSeasonWorks(18);

  return {
    props: {
      todayEpisodes,
      seasonWorks,
    },
  };
};
