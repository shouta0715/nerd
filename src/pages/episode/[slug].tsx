import { Box } from "@mantine/core";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const DynamicEpisode = dynamic(
  () =>
    import("src/features/episodes/components/Episode").then(
      (mod) => mod.Episode
    ),
  {
    ssr: false,
    loading: () => <div>loading...</div>,
  }
);

const Index: NextPage = () => (
  <Box component="section">
    <DynamicEpisode />
  </Box>
);

export default Index;
