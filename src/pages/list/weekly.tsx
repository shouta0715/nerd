import React from "react";
import { SsgError } from "src/components/Elements/Error/items/SsgError";
import { BasicListLayout } from "src/components/Layouts/BasicLayout";
import { AutoCompleteData } from "src/features/episodes/types";
import { getWeeklyWorks } from "src/features/lists/api/router";
import { Weekly } from "src/features/pages/list/weekly";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage } from "src/libs/next/types";

type Props = {
  data: GetWeeklyWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const Page: NextSSGPage<Props> = ({ data, error }) =>
  error ? <SsgError /> : <Weekly {...data} />;

Page.getLayout = BasicListLayout;
Page.getTitle = Meta(() => "今週放送のアニメ一覧 - Nerd");

export const getStaticProps: NextSSG<Props> = async () => {
  const data = await getWeeklyWorks(null);
  const autoCompleteData: AutoCompleteData[] = data?.weekly_works.map(
    (work) => ({
      title: work.series_title,
      value: work.series_title,
    })
  );

  return {
    props: {
      data: {
        data,
        autoCompleteData,
      },
      error: null,
    },
  };
};

export default Page;
