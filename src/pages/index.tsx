import { Box } from "@mantine/core";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/Layout/Layout";
import { TodayEpisodes } from "src/features/episodes/components/TodayEpisodes";
import {
  useGetMediaTypesQuery,
  useGetTodayEpisodesQuery,
} from "src/generated/graphql";

import { getTodayData } from "src/hooks/router/dynamicPaths";
// import { Box } from "@mantine/core";
// import { InviteItem } from "../features/invites/InviteItem";

const Home: NextPage = () => (
  <Layout>
    <Box component="section" bg="indigo.1">
      <TodayEpisodes />
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
