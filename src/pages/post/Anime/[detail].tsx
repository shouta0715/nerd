import { Title } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { PostTimer } from "../../../components/atom/posts/PostTimer";
import { PostTop } from "../../../components/atom/posts/PostTop";
import { Layout } from "../../../components/templates/layout/Layout";
import { useQueryPost } from "../../../hooks/posts/useQueryPost";
import { useQueryUser } from "../../../hooks/users/useQueryUser";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };
  const { post } = useQueryPost(detail);
  const { data } = useQueryUser(post?.user_id ?? "");

  return (
    <Layout>
      <div className="p-6 md:p-10">
        <Title
          className="mx-auto mb-4 flex w-full flex-1 shrink flex-col items-center justify-center text-xl md:text-2xl "
          order={2}
        >
          <PostTop category={post?.category} user={data} />
          <span>{post?.title}</span>
        </Title>
        {post && <PostTimer start_time={post?.start_time} />}
      </div>
    </Layout>
  );
};

export default Detail;
