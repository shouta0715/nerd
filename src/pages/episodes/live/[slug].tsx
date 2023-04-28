import { NextPage } from "next";
import React, { Suspense } from "react";

import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Live } from "src/features/live/components/Live";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<EpisodeSkelton />}>
      <Live />
    </Suspense>
  </section>
);

export default Index;
