import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayoutOnlyHeader } from "src/components/Layouts/BasicLayout";
import { Episode } from "src/features/episodes/components/Episode";
import {
  getHighTrafficEpisodes,
  getHighTrafficEpisodesIds,
} from "src/features/lists/api/router";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { Meta } from "src/libs/meta";

import { NextSSG, NextSSGPage } from "src/libs/next/types";

const Page: NextSSGPage<GetEpisodeQuery> = ({ data }) => (
  <Suspense fallback={<Skeleton theme="episode" />}>
    <Episode data={data} />
  </Suspense>
);

Page.getLayout = BasicLayoutOnlyHeader;
Page.getTitle = Meta(() => "Nerd");

export default Page;

export const getStaticPaths = async () => {
  const ids = await getHighTrafficEpisodesIds();

  const paths = ids.map((id) => ({ params: { slug: id } }));

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: NextSSG<GetEpisodeQuery> = async ({ params }) => {
  const data = await getHighTrafficEpisodes(params?.slug as string);

  return {
    props: {
      data,
      error: null,
    },
  };
};
