import { NextPage } from "next";
import React, { Suspense } from "react";
import { Series } from "src/features/series/components/Series";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<div>Loading...</div>}>
      <Series />
    </Suspense>
  </section>
);

export default Index;
