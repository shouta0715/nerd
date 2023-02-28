import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Autocomplete, Box, Text, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { TodayEpisodes } from "src/features/episodes/components/TodayEpisodes";
import { SeasonWorks } from "src/features/works/components/SeasonWorks";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { getSeasonWorks, getTodayEpisodes } from "src/hooks/router/getData";
import { useAutoCompleteState } from "src/store/global/globalStore";
import { useSearchInputState } from "src/store/input/serchInput";

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
