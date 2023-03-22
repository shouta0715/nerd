import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Input } from "src/components/Elements/Input/Input";
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
    <div className="container mx-auto flex flex-col space-y-2 bg-slate-50 md:flex-row">
      <section className="w-full min-w-fit bg-white md:w-1/3 md:max-w-sm">
        <div className="static top-0 mx-auto space-y-2 px-6 py-2 md:sticky md:px-2">
          <Navigation />
          <form className="flex w-full space-x-4">
            <Input className="flex-1" placeholder="タイトルで検索" />
          </form>
        </div>
      </section>
      <div className="container mx-auto ">
        <section className="p-6">
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
        </section>
        <section className="container mx-auto ">
          <div className="px-6 pb-12 pt-6">
            <TopTitle href="/list/seasonWorks" title="今期のアニメ" />
            <ul className="grid grid-cols-1 gap-2  md:gap-4  lg:grid-cols-2">
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
        </section>
      </div>
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
