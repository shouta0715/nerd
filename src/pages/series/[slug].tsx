import { NextPage } from "next";
import React, { Suspense } from "react";
import { SeriesSkelton } from "src/components/Elements/Loader/loaders/SeriesSkelton";

import { Series } from "src/features/series/components/Series";

const Index: NextPage = () => (
  <section className="flex min-h-screen flex-col">
    <Suspense fallback={<SeriesSkelton />}>
      <Series />
    </Suspense>
  </section>
);

export default Index;
