import { Box } from "@mantine/core";
import { NextPage } from "next";
import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Layout/loading/EpisodeSkelton";
import { Episode } from "src/features/episodes/components/Episode";

const Index: NextPage = () => (
  <Box component="section">
    <Suspense fallback={<EpisodeSkelton />}>
      <Episode />
    </Suspense>
  </Box>
);

export default Index;
