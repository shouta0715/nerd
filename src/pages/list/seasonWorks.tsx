import { GetStaticProps, NextPage } from "next";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getSeasonWorks } from "src/features/lists/api/router";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { SeasonWorksList } from "src/features/lists/components/SeasonWorks";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = {
  data: GetSeasonWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const SeasonWorks: NextPage<Props> = ({ data, autoCompleteData }) => (
  <section className="min-h-screen animate-fadeUp bg-gray-50">
    <ListHeader autoCompleteData={autoCompleteData} />
    <div className="container mx-auto">
      <div className="p-6">
        <ListTitle title="今期のアニメ" />
        <SeasonWorksList data={data} />
      </div>
    </div>
  </section>
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
