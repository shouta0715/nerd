import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Box, Text } from "@mantine/core";
import { dehydrate } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { TopTitle } from "src/components/Elements/TopTitle";
import { Layout } from "src/components/Layout/Layout";
import { Navigation } from "src/components/Layout/modules/Navigation";
import { TodayEpisodes } from "src/features/episodes/components/TodayEpisodes";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { useGetMediaTypesQuery } from "src/graphql/otherQuery.generated";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { getSeasonWorks, getTodayEpisodes } from "src/hooks/router/getData";

import { getClient } from "src/utils/getClient";

type Props = {
  todayEpisodes: GetTodayEpisodesQuery;
  seasonWorks: GetSeasonWorksQuery;
};

const Home: NextPage<Props> = ({ todayEpisodes, seasonWorks }) => (
  <Layout>
    <div className="space-y-2">
      <Box
        component="section"
        className="border-x-0 border-y-0 border-b-2 border-solid border-slate-100"
      >
        <Box className="container mx-auto py-4">
          <Navigation />
        </Box>
      </Box>
      <Box
        component="section"
        className="border-x-0 border-y-0 border-b-2 border-solid border-slate-100"
      >
        <Box className="container mx-auto ">
          <div className="px-6 pb-12 pt-6">
            <TopTitle href="/lists/today" title="今日放送のエピソード" />
            <TodayEpisodes data={todayEpisodes} />
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
          </div>
        </Box>
      </Box>
      <Box component="section">
        <Box className="container mx-auto ">
          <div className="px-6 pb-12 pt-6">
            <TopTitle href="/lists/season" title="今期のアニメ" />
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4  lg:grid-cols-3">
              {seasonWorks.works?.map((work) => (
                <WorkItem work={work} key={`work-${work.id}`} />
              ))}
            </ul>
            <Text
              align="center"
              component="p"
              className="mt-6 flex w-full items-center justify-center hover:underline"
            >
              <Link href="/lists/season" className="text-base md:text-lg">
                今期のアニメをもっと見る
              </Link>
              <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
            </Text>
          </div>
        </Box>
      </Box>
    </div>
  </Layout>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { queryClient, request } = getClient();

  const mediaTypesQueryKey = useGetMediaTypesQuery.getKey({});
  await queryClient.prefetchQuery(
    mediaTypesQueryKey,
    useGetMediaTypesQuery.fetcher(request, {})
  );

  const todayEpisodes = await getTodayEpisodes();
  const seasonWorks = await getSeasonWorks(18);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      todayEpisodes,
      seasonWorks,
    },
  };
};
