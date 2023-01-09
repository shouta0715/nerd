import { ActionIcon, ScrollArea, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useQueryComments } from "../../../hooks/comments/useQueryComments";
import { useSubscriptionComment } from "../../../hooks/comments/useSubscriptionComment";
import { useQueryPost } from "../../../hooks/posts/useQueryPost";
import { CommentInput } from "../../atom/comment/CommentInput";
import { PostTimer } from "../../atom/posts/PostTimer";

type Props = {
  postId: string;
};

export const DetailPost: FC<Props> = ({ postId }) => {
  const { post } = useQueryPost(postId);
  const { data: comments, isLoading } = useQueryComments(postId);
  const router = useRouter();
  useSubscriptionComment(postId);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="container relative mx-auto flex h-[100svh] flex-col pt-4 md:pt-6">
      <ActionIcon
        onClick={() => router.back()}
        className="absolute left-2 z-[10]"
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
      <div className="relative flex flex-1 flex-col  overflow-hidden">
        <ScrollArea
          classNames={{
            thumb: "bg-indigo-500",
          }}
          className=" px-6 pb-32 md:pb-44"
          scrollbarSize={10}
        >
          {comments?.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ScrollArea>
        <CommentInput />
      </div>
    </div>
  );
};
