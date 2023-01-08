import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../../components/templates/layout/Layout";
import { DetailPost } from "../../../components/templates/posts/DetailPost";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };

  return (
    <Layout>
      <DetailPost postId={detail} />
    </Layout>
  );
};

export default Detail;
