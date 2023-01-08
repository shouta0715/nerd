import { ActionIcon, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { PostTimer } from "../../../components/atom/posts/PostTimer";
import { Layout } from "../../../components/templates/layout/Layout";
import { useQueryPost } from "../../../hooks/posts/useQueryPost";
import { useQueryUser } from "../../../hooks/users/useQueryUser";

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query as { detail: string };
  const { post } = useQueryPost(detail);
  const { data } = useQueryUser(post?.user_id ?? "");
  console.log(data);

  return (
    <Layout>
      <div className="relative p-6 md:p-10">
        <ActionIcon
          onClick={() => router.back()}
          className="absolute left-2 md:hidden"
          color="dark"
          size="md"
          radius="lg"
          variant="transparent"
        >
          <IconArrowNarrowLeft size={34} />
        </ActionIcon>
        <div className="relative mx-auto mb-4 flex w-full flex-1 shrink flex-col items-center justify-center  ">
          <Title order={2} className="pl-2 text-2xl md:text-3xl">
            {post?.title}
          </Title>
        </div>
        <div className="border-x-0 border-y-0 border-b border-solid border-gray-200">
          {post && <PostTimer start_time={post?.start_time} />}
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
