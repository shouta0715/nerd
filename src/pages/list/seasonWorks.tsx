import { Box } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getSeasonWorks } from "src/features/lists/api/router";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { SeasonWorksList } from "src/features/lists/components/SeasonWorks";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = {
  data: GetSeasonWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const DynamicAutComplete = dynamic(() =>
  import("src/features/lists/components/Autocomplete").then(
    (mod) => mod.Autocomplete
  )
);

const SeasonWorks: NextPage<Props> = ({ data, autoCompleteData }) => (
  <Box component="section">
    <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-indigo-200 bg-white/95">
      <Box className="container mx-auto bg-transparent py-3">
        <div className="flex w-full items-center px-4">
          <Link href="/" className="mr-2 flex justify-center md:mr-4 ">
            <IconArrowLeft className="h-6 w-6 text-black" />
          </Link>
          <DynamicAutComplete autoCompleteData={autoCompleteData} />
        </div>
      </Box>
    </header>
    <Box className="container mx-auto">
      <div className="p-6">
        <ListTitle title="今期のアニメ" />
        <SeasonWorksList data={data} />
      </div>
    </Box>
  </Box>
);

export default SeasonWorks;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSeasonWorks(null);
  const autoCompleteData: AutoCompleteData[] = data?.works.map((work) => ({
    title: work.series_title,
    value: work.series_title,
  }));

  return {
    props: {
      data,
      autoCompleteData,
    },
  };
};