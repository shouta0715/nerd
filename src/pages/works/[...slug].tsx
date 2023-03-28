import { NextPage } from "next";
import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Layout/loading/EpisodeSkelton";
import { PlayWork } from "src/features/works/components/PlayWork";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<EpisodeSkelton />}>
      <PlayWork />
    </Suspense>
  </section>
);

export default Index;
