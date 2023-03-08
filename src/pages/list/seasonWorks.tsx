import { Box } from "@mantine/core";
import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
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

const DynamicListHeader = dynamic(() =>
  import("src/features/lists/components/ListHeader").then(
    (mod) => mod.ListHeader
  )
);

const SeasonWorks: NextPage<Props> = ({ data, autoCompleteData }) => (
  <Box component="section">
    <DynamicListHeader autoCompleteData={autoCompleteData} />
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
