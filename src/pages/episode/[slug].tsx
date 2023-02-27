import { Box } from "@mantine/core";
import { dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { useGetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { getClient } from "src/utils/getClient";

const DynamicEpisode = dynamic(
  () =>
    import("src/features/episodes/components/Episode").then(
      (mod) => mod.Episode
    ),
  {
    ssr: true,
    suspense: true,
  }
);

const Index: NextPage = () => (
  <Box component="section">
    <Suspense fallback={<div>loading...</div>}>
      <DynamicEpisode />
    </Suspense>
  </Box>
);

export default Index;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const { queryClient, request } = getClient();

  const queryKey = useGetEpisodeQuery.getKey({ id: slug });
  await queryClient.prefetchQuery(
    queryKey,
    useGetEpisodeQuery.fetcher(request, { id: slug })
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 10,
  };
};
