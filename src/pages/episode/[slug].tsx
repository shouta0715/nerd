import { Box } from "@mantine/core";
import { dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { Suspense } from "react";
import { Episode } from "src/features/episodes/components/Episode";
import { useGetEpisodeQuery } from "src/generated/graphql";
import { getClient } from "src/utils/getClient";

const Index: NextPage = () => (
  <Box component="section" className="">
    <Suspense fallback={<div>loading...</div>}>
      <Episode />
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
