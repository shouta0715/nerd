import { Box } from "@mantine/core";
import { dehydrate } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Layout } from "src/components/Layout/Layout";
import { Navigation } from "src/components/Layout/modules/Navigation";
import {
  useGetMediaTypesQuery,
  useGetSeasonWorksQuery,
  useGetTodayEpisodesQuery,
} from "src/generated/graphql";

import { getTodayData } from "src/hooks/router/dynamicPaths";
import { getClient } from "src/utils/getClient";
import { returningSeason } from "src/utils/returningSeason";

const DynamicSeasonWorks = dynamic(
  () =>
    import("src/features/works/components/SeasonWorks").then(
      (mod) => mod.SeasonWorks
    ),
  {
    ssr: true,
    suspense: true,
  }
);

const DynamicTodayEpisodes = dynamic(
  () =>
    import("src/features/episodes/components/TodayEpisodes").then(
      (mod) => mod.TodayEpisodes
    ),
  {
    ssr: true,
    suspense: true,
  }
);

const Home: NextPage = () => (
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
          <Suspense fallback={<div>loading...</div>}>
            <DynamicTodayEpisodes />
          </Suspense>
        </Box>
      </Box>
      <Box component="section">
        <Box className="container mx-auto ">
          <Suspense fallback={<div>loading...</div>}>
            <DynamicSeasonWorks />
          </Suspense>
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

  const episodesWhereQuery = await getTodayData();

  await queryClient.prefetchQuery(
    ["todayEpisodes"],
    useGetTodayEpisodesQuery.fetcher(request, {
      where: episodesWhereQuery,
    })
  );

  const seasonData = returningSeason();

  await queryClient.prefetchQuery(
    ["seasonWorks"],
    useGetSeasonWorksQuery.fetcher(request, {
      season: seasonData.season,
      year: seasonData.year,
    })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
