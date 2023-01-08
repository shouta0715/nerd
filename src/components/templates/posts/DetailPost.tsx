import { ActionIcon, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useQueryPost } from "../../../hooks/posts/useQueryPost";
import { useQueryUser } from "../../../hooks/users/useQueryUser";
import { PostTimer } from "../../atom/posts/PostTimer";

type Props = {
  postId: string;
};

export const DetailPost: FC<Props> = ({ postId }) => {
  const { post } = useQueryPost(postId);
  const { data } = useQueryUser(post?.user_id ?? "");
  const router = useRouter();
  console.log(data);

  return (
    <div className="relative p-6 md:p-10">
      <ActionIcon
        onClick={() => router.back()}
        className="absolute left-2  md:hidden"
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
  );
};
