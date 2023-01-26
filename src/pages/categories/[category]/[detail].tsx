import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { DetailInvite } from "../../../components/invites/DetailInvite";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };

  return <DetailInvite postId={detail} />;
};

export default Detail;
