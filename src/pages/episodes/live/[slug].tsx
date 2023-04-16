import { NextPage } from "next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorPage } from "src/components/Elements/error/ErrorPage";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Live } from "src/features/live/components/Live";

const Index: NextPage = () => (
  <section>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<EpisodeSkelton />}>
        <Live />
      </Suspense>
    </ErrorBoundary>
  </section>
);

export default Index;
