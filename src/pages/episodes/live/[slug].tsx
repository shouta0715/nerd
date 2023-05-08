import { NextPage } from "next";
import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Live } from "src/features/live/components/Live";

const Index: NextPage = () => (
  <section>
    <Suspense fallback={<Skeleton theme="episode" />}>
      <Live />
    </Suspense>
  </section>
);

export default Index;
