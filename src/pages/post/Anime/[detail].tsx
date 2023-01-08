import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Layout } from "../../../components/templates/layout/Layout";
import { DetailPost } from "../../../components/templates/posts/DetailPost";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };

  return (
    <Layout>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <DetailPost postId={detail} />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Detail;
