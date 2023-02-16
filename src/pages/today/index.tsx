import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Autocomplete, Box, Text, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { TodayEpisodeList } from "src/features/episodes/components/TodayEpisodeList";
import { AutoCompleteData } from "src/features/episodes/types";
import {
  useGetMediaTypesQuery,
  useGetTodayEpisodesQuery,
} from "src/generated/graphql";
import { getTodayData } from "src/hooks/router/dynamicPaths";
import { useSearchInputState } from "src/store/input/serchInput";

const Index: NextPage = () => {
  const [autoCompleteData, setAutoCompleteData] = useState<AutoCompleteData[]>(
    []
  );
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const setTitle = useCallback(
    (items: AutoCompleteData[] | undefined) => {
      setAutoCompleteData(items ?? []);
    },
    [setAutoCompleteData]
  );

  return (
    <Box component="section" className="min-h-screen">
      <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-indigo-200 bg-white/95">
        <Box className="container mx-auto flex flex-col items-start justify-center  space-y-2 bg-transparent py-4 md:flex-row md:items-center md:space-y-0">
          <Title
            order={2}
            size="h3"
            className="mr-3  flex h-full items-center text-base md:mr-6 md:text-2xl"
          >
            <Link
              scroll={false}
              href="/"
              className="mr-2 flex justify-center p-1 md:mr-4 md:p-2"
            >
              <ArrowSmallLeftIcon className="h-6 w-6 text-black" />
            </Link>
            <Text component="span">今日放送のエピソード</Text>
          </Title>
          <div className="w-full flex-1">
            <Autocomplete
              filter={(value, item) =>
                item.title.includes(value.toLowerCase().trim()) ||
                item.episodeTitle.includes(value.toLowerCase().trim())
              }
              itemComponent={AutoCompleteItem}
              data={autoCompleteData}
              icon={<IconSearch className="text-indigo-500" size={20} />}
              placeholder="タイトルで検索"
              classNames={{
                wrapper:
                  "h-8 w-full mx-auto md:mx-0 flex items-center md:max-w-sm max-w-xs",
                input: "text-base",
              }}
              radius="xl"
              onChange={(e) => setSearchInput(e)}
            />
          </div>
        </Box>
      </header>
      <Box className="container mx-auto">
        <div className="p-6">
          <TodayEpisodeList callbackTitle={setTitle} />
        </div>
      </Box>
    </Box>
  );
};

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
