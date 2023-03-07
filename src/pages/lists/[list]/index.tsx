import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ActionIcon, Autocomplete, Box, Text, Title } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { TodayEpisodes } from "src/features/episodes/components/TodayEpisodes";
import { useAutoCompleteState } from "src/features/episodes/store";
import { SeasonWorks } from "src/features/works/components/SeasonWorks";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { getSeasonWorks, getTodayEpisodes } from "src/hooks/router/getData";

import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  data: GetTodayEpisodesQuery | GetSeasonWorksQuery;
};

const Index: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const { query } = router;
  const autoCompleteData = useAutoCompleteState(
    (state) => state.autoCompleteData
  );
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);

  return (
    <Box component="section">
      <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-indigo-200 bg-white/95">
        <Box className="container mx-auto bg-transparent py-3">
          <div className="flex w-full items-center px-4">
            <Link href="/" className="mr-2 flex justify-center md:mr-4 ">
              <ArrowSmallLeftIcon className="h-6 w-6 text-black" />
            </Link>
            <Autocomplete
              filter={(value, item) =>
                item.title.includes(value.toLowerCase().trim()) ||
                item.episodeTitle?.includes(value.toLowerCase().trim())
              }
              itemComponent={AutoCompleteItem}
              data={autoCompleteData}
              className="mx-auto w-full max-w-sm md:max-w-md"
              icon={<IconSearch className="text-indigo-500" size={20} />}
              iconWidth={48}
              rightSectionWidth={48}
              rightSection={
                <ActionIcon
                  variant="transparent"
                  onClick={() => setSearchInput("")}
                >
                  <IconX className="text-indigo-500" size={20} />
                </ActionIcon>
              }
              placeholder="タイトルで検索"
              classNames={{
                wrapper: "h-8 w-full  mx-auto md:mx-0 flex items-center ",
                input: "text-base",
              }}
              radius="xl"
              onChange={(e) => setSearchInput(e)}
              value={useSearchInputState((state) => state.searchInput)}
            />
          </div>
        </Box>
      </header>
      <Box className="container mx-auto">
        <div className="p-6">
          <Title
            order={2}
            size="h3"
            className="mb-3 items-center text-base md:text-2xl"
          >
            <Text component="span">
              {query.list === "today" ? "今日放送のエピソード" : "今期のアニメ"}
            </Text>
          </Title>

          {query.list === "today" && (
            <TodayEpisodes data={data as GetTodayEpisodesQuery} />
          )}

          {query.list === "season" && (
            <SeasonWorks data={data as GetSeasonWorksQuery} />
          )}
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

  const data =
    query === "today" ? await getTodayEpisodes() : await getSeasonWorks(null);

  return {
    props: {
      data,
    },
  };
};
