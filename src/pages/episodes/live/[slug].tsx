import { GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayoutOnlyHeader } from "src/components/Layouts/BasicLayout";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { getEpisode, getLiveIdsPaths } from "src/hooks/router/dynamicPaths";
import { Meta } from "src/libs/meta";
import { genTitle } from "src/libs/meta/OnlyTitle";

import { NextSSG, NextSSGPage } from "src/libs/next/types";

const DynamicLive = dynamic(
  () => import("src/features/live/components").then((mod) => mod.Live),
  {
    ssr: false,
    loading: () => <Skeleton theme="episode" />,
  }
);

const Page: NextSSGPage<GetEpisodeQuery> = ({ data }) => (
  <DynamicLive key={data.episodes_by_pk?.id} data={data} />
);

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
