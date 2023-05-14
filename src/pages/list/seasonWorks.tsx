import React from "react";
import { SsgError } from "src/components/Elements/error/SsgError";
import { BasicListLayout } from "src/components/Layouts/BasicLayout";
import { AutoCompleteData } from "src/features/episodes/types";
import { getSeasonWorks } from "src/features/lists/api/router";
import { Season } from "src/features/pages/list/season";

import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage } from "src/libs/next/types";

type Props = {
  data: GetSeasonWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const Page: NextSSGPage<Props> = ({ data, error }) =>
  error ? <SsgError /> : <Season {...data} />;

Page.getLayout = BasicListLayout;
Page.getTitle = Meta(() => "今期放送のアニメ一覧 - Nerd");

export default Page;

export const getStaticProps: NextSSG<Props> = async () => {
  const data = await getSeasonWorks(null);
  const autoCompleteData: AutoCompleteData[] = data?.works.map((work) => ({
    title: work.series_title,
    value: work.series_title,
  }));

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
