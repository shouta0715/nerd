import { NextPage } from "next";
import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { PlayWork } from "src/features/works/components/PlayWork";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<Skeleton theme="episode" />}>
      <PlayWork />
    </Suspense>
  </section>
);

export default Index;
