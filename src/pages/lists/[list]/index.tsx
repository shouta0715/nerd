import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Autocomplete, Box, Text, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { TodayEpisodeList } from "src/features/episodes/components/TodayEpisodeList";
import { SeasonWorksList } from "src/features/works/components/SeasonWorksList";
import { useGetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { useGetMediaTypesQuery } from "src/graphql/otherQuery.generated";
import { useGetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

import { getTodayData } from "src/hooks/router/dynamicPaths";
import { useAutoCompleteState } from "src/store/global/globalStore";
import { useSearchInputState } from "src/store/input/serchInput";
import { getClient } from "src/utils/getClient";
import { returningSeason } from "src/utils/returningSeason";

const Index: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const autoCompleteData = useAutoCompleteState(
    (state) => state.autoCompleteData
  );
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);

  return (
    <Box component="section">
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
            <Text component="span">
              {query.list === "today" ? "今日放送のエピソード" : "今期のアニメ"}
            </Text>
          </Title>
          <div className="w-full flex-1">
            <Autocomplete
              filter={(value, item) =>
                item.title.includes(value.toLowerCase().trim()) ||
                item.episodeTitle?.includes(value.toLowerCase().trim())
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
          {query.list === "today" && <TodayEpisodeList />}

          {query.list === "season" && <SeasonWorksList />}
        </div>
      </Box>
    </Box>
  );
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { list: "today" } }, { params: { list: "season" } }];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = context.params?.list;

  const { queryClient, request } = getClient();

  const mediaTypesQueryKey = useGetMediaTypesQuery.getKey({});
  await queryClient.prefetchQuery(
    mediaTypesQueryKey,
    useGetMediaTypesQuery.fetcher(request, {})
  );

  if (query === "today") {
    const episodesWhereQuery = await getTodayData();
    await queryClient.prefetchQuery(
      ["todayEpisodes"],
      useGetTodayEpisodesQuery.fetcher(request, {
        where: episodesWhereQuery,
      })
    );
  }

  if (query === "season") {
    const seasonData = returningSeason();
    await queryClient.prefetchQuery(
      ["seasonWorks"],
      useGetSeasonWorksQuery.fetcher(request, {
        season: seasonData.season,
        year: seasonData.year,
      })
    );
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
