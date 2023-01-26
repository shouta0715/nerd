import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { DetailPost } from "../../../components/invites/DetailInvite";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };

  return <DetailPost postId={detail} />;
};

export default Detail;
