import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Loading } from "src/features/trends/components/Loading";
import { TrendsError } from "src/features/trends/components/TrendsError";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const DynamicTrends = dynamic(
  () => import("src/features/trends/components").then((mod) => mod.Trends),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const Page: NextPageWithLayout = () => (
  <ErrorBoundary FallbackComponent={TrendsError}>
    <Suspense fallback={<Loading />}>
      <DynamicTrends />
    </Suspense>
  </ErrorBoundary>
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "トレンド - Nerd");

export default Page;
