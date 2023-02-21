import { dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useGetEpisodeQuery } from "src/generated/graphql";
import { getTodaysAndSeasonsIds } from "src/hooks/router/dynamicPaths";
import { getClient } from "src/utils/getClient";

const Index: NextPage = () => {
  const _ = useRouter();

  return <div>hello</div>;
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTodaysAndSeasonsIds();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const { queryClient, request } = getClient();

  // eslint-disable-next-line no-promise-executor-return
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const queryKey = useGetEpisodeQuery.getKey({ id: slug as string });
  await queryClient.prefetchQuery(
    queryKey,
    useGetEpisodeQuery.fetcher(request, { id: slug as string })
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
