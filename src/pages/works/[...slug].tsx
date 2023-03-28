import { NextPage } from "next";
import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";

import { PlayWork } from "src/features/works/components/PlayWork";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<EpisodeSkelton />}>
      <PlayWork />
    </Suspense>
  </section>
);

export default Index;
