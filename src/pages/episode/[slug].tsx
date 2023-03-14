import { NextPage } from "next";
import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Layout/loading/EpisodeSkelton";
import { Episode } from "src/features/episodes/components/Episode";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<EpisodeSkelton />}>
      <Episode />
    </Suspense>
  </section>
);

export default Index;
