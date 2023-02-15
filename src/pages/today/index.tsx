import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Box, Input, Text, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { TodayEpisodeList } from "src/features/episodes/components/TodayEpisodeList";
import {
  useGetMediaTypesQuery,
  useGetTodayEpisodesQuery,
} from "src/generated/graphql";
import { getTodayData } from "src/hooks/router/dynamicPaths";

const Index: NextPage = () => (
  <Box component="section" bg="indigo.1">
    <Box className="container mx-auto ">
      <div className="px-6 pb-12 pt-6">
        <Box className="sticky top-0 z-[100] flex items-center bg-[rgba(238,242,255,0.95)] p-2">
          <Title
            order={2}
            size="h3"
            className="mr-3 flex h-full items-center text-base md:mr-6 md:text-2xl"
          >
            <Link
              scroll={false}
              href="/"
              className="mr-2 flex justify-center p-1 md:mr-4 md:p-2"
            >
              <ArrowSmallLeftIcon className="h-6 w-6  text-black" />
            </Link>
            <Text component="span">今日放送のエピソード</Text>
          </Title>
          <form className="flex-1">
            <Input
              icon={<IconSearch className="text-indigo-500" size={20} />}
              placeholder="タイトルで検索"
              classNames={{
                wrapper: "h-8 flex items-center max-w-sm",
                input: "text-base",
              }}
              radius="xl"
            />
          </form>
        </Box>
        <TodayEpisodeList />
      </div>
    </Box>
  </Box>
);

export default Index;

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
