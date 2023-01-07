import { useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useQueryPost } from "../../../hooks/posts/useQueryPost";
import { useQueryUser } from "../../../hooks/users/useQueryUser";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };
  const { post } = useQueryPost(detail);
  const user = useQueryUser(post?.user_id ?? "");

  return <div>Detail</div>;
};

export default Detail;
