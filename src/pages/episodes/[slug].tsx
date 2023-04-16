import { NextPage } from "next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "src/components/Elements/error/ErrorPage";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Episode } from "src/features/episodes/components/Episode";

const Index: NextPage = () => (
  <section>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<EpisodeSkelton />}>
        <Episode />
      </Suspense>
    </ErrorBoundary>
  </section>
);

export default Index;
