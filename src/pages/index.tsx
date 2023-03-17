import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { Layout } from "src/components/Layout/Layout";
import { Navigation } from "src/components/Layout/modules/Navigation";
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
    <div className="space-y-2">
      <section className=" border-slate-100">
        <div className="container mx-auto py-4">
          <Navigation />
        </div>
      </section>
      <section className=" border-slate-100 bg-sky-50/70">
        <div className="container mx-auto ">
          <div className="p-6">
            <TopTitle href="/list/todayEpisodes" title="今日放送のエピソード" />
            <TodayEpisodeList data={todayEpisodes} />
            <Text
              align="center"
              className="mt-6 flex w-full items-center justify-center hover:underline"
              component="p"
              ff="Hiragino Sans"
            >
              <Link className="text-base md:text-lg" href="/list/todayEpisodes">
                今日のエピソードをもっと見る
              </Link>
              <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
            </Text>
          </div>
        </div>
      </section>
      <section className="bg-gray-50/70">
        <div className="container mx-auto ">
          <div className="px-6 pb-12 pt-6">
            <TopTitle href="/list/seasonWorks" title="今期のアニメ" />
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4  lg:grid-cols-3">
              {seasonWorks.works?.map((work) => (
                <WorkItem key={`work-${work.id}`} work={work} />
              ))}
            </ul>
            <Text
              align="center"
              className="mt-6 flex w-full items-center justify-center hover:underline"
              component="p"
              ff="Hiragino Sans"
            >
              <Link className="text-base md:text-lg" href="/list/seasonWorks">
                今期のアニメをもっと見る
              </Link>
              <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
            </Text>
          </div>
        </div>
      </section>
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
