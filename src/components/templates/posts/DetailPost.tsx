import { ActionIcon, ScrollArea, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useQueryPost } from "../../../hooks/posts/useQueryPost";
import { CommentInput } from "../../atom/comment/CommentInput";
import { PostTimer } from "../../atom/posts/PostTimer";

type Props = {
  postId: string;
};

export const DetailPost: FC<Props> = ({ postId }) => {
  const { post } = useQueryPost(postId);

  const router = useRouter();

  return (
    <div className="relative flex h-[calc(100dvh-64px-55px)] flex-col pt-4 md:h-[calc(100dvh-64px)] md:pt-6">
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
      <div className="relative mx-auto mb-4 flex w-full shrink flex-col items-center justify-center">
        <Title order={2} className="pl-2 text-2xl md:text-3xl">
          {post?.title}
        </Title>
        <div className="w-full border-x-0 border-y-0 border-b border-solid border-gray-200">
          {post && <PostTimer start_time={post?.start_time} />}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <ScrollArea className="flex-1 px-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          accusantium ad repudiandae! Quidem maiores sed impedit incidunt natus.
          Sed omnis repellat id fugiat ab dignissimos velit voluptate quas
          magnam maiores?
        </ScrollArea>
        <CommentInput />
      </div>
    </div>
  );
};
