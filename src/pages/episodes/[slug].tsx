import { NextPage } from "next";
import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";

import { Episode } from "src/features/episodes/components/Episode";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<Skeleton theme="episode" />}>
      <Episode />
    </Suspense>
  </section>
);

export default Index;
