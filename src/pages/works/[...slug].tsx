import { NextPage } from "next";
import React, { Suspense } from "react";
import { PlayWork } from "src/features/works/components/PlayWork";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<div>Loading...</div>}>
      <PlayWork />
    </Suspense>
  </section>
);

export default Index;
