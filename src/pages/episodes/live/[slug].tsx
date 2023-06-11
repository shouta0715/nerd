import { GetStaticPaths } from "next";
import React from "react";
import { BasicLayoutOnlyHeader } from "src/components/Layouts/BasicLayout";
import { Live } from "src/features/live/components";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { getEpisode, getLiveIdsPaths } from "src/hooks/router/dynamicPaths";
import { Meta } from "src/libs/meta";
import { genTitle } from "src/libs/meta/OnlyTitle";

import { NextSSG, NextSSGPage } from "src/libs/next/types";

const Page: NextSSGPage<GetEpisodeQuery> = ({ data }) => <Live data={data} />;

Page.getLayout = BasicLayoutOnlyHeader;
Page.getTitle = Meta(({ data }) =>
  genTitle({
    title: data.episodes_by_pk?.work.series_title,
    number: data?.episodes_by_pk?.number,
    subtitle: data?.episodes_by_pk?.title,
  })
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getLiveIdsPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: NextSSG<GetEpisodeQuery> = async ({ params }) => {
  const id = params?.slug as string;
  const data = await getEpisode(id);

  return {
    props: {
      data,
      error: null,
    },
  };
};
