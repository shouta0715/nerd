import { Box } from "@mantine/core";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/Layout/Layout";
import { Navigation } from "src/components/Layout/modules/Navigation";
import { TodayEpisodes } from "src/features/episodes/components/TodayEpisodes";
import {
  useGetMediaTypesQuery,
  useGetTodayEpisodesQuery,
} from "src/generated/graphql";

import { getTodayData } from "src/hooks/router/dynamicPaths";

const Home: NextPage = () => (
  <Layout>
    <Box component="section" className="mb-2 bg-sky-50/30">
      <Box className="container mx-auto py-4">
        <Navigation />
      </Box>
    </Box>
    <Box component="section" className="bg-sky-50/30">
      <Box className="container mx-auto ">
        <TodayEpisodes />
      </Box>
    </Box>
  </Layout>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const request = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  const mediaTypesQueryKey = useGetMediaTypesQuery.getKey({});
  await queryClient.prefetchQuery(
    mediaTypesQueryKey,
    useGetMediaTypesQuery.fetcher(request, {})
  );

  const episodesWhereQuery = await getTodayData();

  await queryClient.prefetchQuery(
    ["todayEpisodes"],
    useGetTodayEpisodesQuery.fetcher(request, {
      where: episodesWhereQuery,
    })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
