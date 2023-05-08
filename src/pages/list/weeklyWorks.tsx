import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { BasicListLayout } from "src/components/Layouts/BasicLayout";
import { AutoCompleteData } from "src/features/episodes/types";
import { getWeeklyWorks } from "src/features/lists/api/router";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { WeeklyWorksList } from "src/features/lists/components/WeeklyWorksList";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";
import { Meta } from "src/libs/meta";
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
  data: GetWeeklyWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const Page: NextPageWithLayout<Props> = ({ data, autoCompleteData }) => (
  <section className="min-h-screen animate-fadeUp bg-gray-50">
    <ListHeader autoCompleteData={autoCompleteData} />
    <div className="container mx-auto">
      <div className="px-3 py-4 md:px-6">
        <ListTitle title="今週のアニメ" />
        <WeeklyWorksList data={data} />
      </div>
    </div>
    <DynamicSearchButton />
  </section>
);

Page.getLayout = BasicListLayout;
Page.getTitle = Meta(() => "今週放送のアニメ一覧 - Nerd");

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

export default Page;
