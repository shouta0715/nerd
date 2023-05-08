import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { BasicLayoutOnlyHeader } from "src/components/Layouts/BasicLayout";
import { AutoCompleteData } from "src/features/episodes/types";
import { getSeasonWorks } from "src/features/lists/api/router";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { SeasonWorksList } from "src/features/lists/components/SeasonWorks";

import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { NextPageWithLayout } from "src/libs/next/types";

const DynamicSearchButton = dynamic(
  () =>
    import("src/components/Elements/SearchButton").then(
      (mod) => mod.SearchButton
    ),
  {
    ssr: false,
  }
);

type Props = {
  data: GetSeasonWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const Page: NextPageWithLayout<Props> = ({ data, autoCompleteData }) => (
  <section className="min-h-screen animate-fadeUp bg-gray-50">
    <ListHeader autoCompleteData={autoCompleteData} />
    <div className="container mx-auto">
      <div className="px-3 py-4 md:px-6">
        <ListTitle title="今期のアニメ" />
        <SeasonWorksList data={data} />
      </div>
    </div>
    <DynamicSearchButton />
  </section>
);

Page.getLayout = BasicLayoutOnlyHeader;

export default Page;

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
