import { Box } from "@mantine/core";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Layout/loading/EpisodeSkelton";

const DynamicEpisode = dynamic(
  () =>
    import("src/features/episodes/components/Episode").then(
      (mod) => mod.Episode
    ),
  {
    ssr: true,
    suspense: true,
  }
);

const Index: NextPage = () => (
  <Box component="section">
    <Suspense fallback={<EpisodeSkelton />}>
      <DynamicEpisode />
    </Suspense>
  </Box>
);

export default Index;
