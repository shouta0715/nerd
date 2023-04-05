import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getWeeklyWorks } from "src/features/lists/api/router";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { WeeklyWorksList } from "src/features/lists/components/WeeklyWorksList";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";

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
  data: GetWeeklyWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const WeeklyWorks: NextPage<Props> = ({ data, autoCompleteData }) => (
  <>
    <section className="min-h-screen animate-fadeUp bg-gray-50">
      <ListHeader autoCompleteData={autoCompleteData} />
      <div className="container mx-auto">
        <div className="px-6 py-4">
          <ListTitle title="今週のアニメ" />
          <WeeklyWorksList data={data} />
        </div>
      </div>
    </section>
    <DynamicSearchButton />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getWeeklyWorks(null);
  const autoCompleteData: AutoCompleteData[] = data?.weekly_works.map(
    (work) => ({
      title: work.series_title,
      value: work.series_title,
    })
  );

  return {
    props: {
      data,
      autoCompleteData,
    },
  };
};

export default WeeklyWorks;
