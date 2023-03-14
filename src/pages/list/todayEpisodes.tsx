import { IconArrowLeft } from "@tabler/icons";
import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getTodayEpisodes } from "src/features/lists/api/router";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetTodayEpisodesQuery;
  autoCompleteData: AutoCompleteData[];
};

const DynamicAutComplete = dynamic(() =>
  import("src/features/lists/components/Autocomplete").then(
    (mod) => mod.Autocomplete
  )
);

const TodayEpisodes: NextPage<Props> = ({ autoCompleteData, data }) => (
  <section className="animate-fadeUp">
    <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-indigo-200 bg-white/95">
      <div className="container mx-auto bg-transparent py-3">
        <div className="flex w-full items-center px-4">
          <Link href="/" className="mr-2 flex justify-center md:mr-4 ">
            <IconArrowLeft className="h-6 w-6 text-black" />
          </Link>
          <DynamicAutComplete autoCompleteData={autoCompleteData} />
        </div>
      </div>
    </header>
    <div className="container mx-auto">
      <div className="p-6">
        <ListTitle title="今日放送のエピソード" />
        <TodayEpisodeList data={data} />
      </div>
    </div>
  </section>
);

export default TodayEpisodes;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getTodayEpisodes();
  const autoCompleteData: AutoCompleteData[] = data?.episodes
    .map((episode) => ({
      title: episode.work.series_title,
      episodeTitle: episode.title,
      number: episode.number,
      value: episode.title,
    }))
    .reverse();

  return {
    props: {
      data,
      autoCompleteData,
    },
  };
};
