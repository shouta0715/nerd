/* eslint-disable react/display-name */
import { Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { GetPostsQuery } from "../../../generated/graphql";
import { useQueryUser } from "../../../hooks/users/useQueryUser";
import { PostTimer } from "../../atom/posts/PostTimer";
import { PostTop } from "../../atom/posts/PostTop";

type Props = {
  post: GetPostsQuery["posts"][0];
};

export const PostItem: FC<Props> = memo(({ post }) => {
  const { data: user } = useQueryUser(post.user_id);

  return (
    <Link
      href="/"
      className=" group block h-full flex-1 overflow-x-hidden border-y border-x-0 border-t-0 border-solid border-gray-300 py-4 first:pt-0"
    >
      <div className="flex flex-col items-center justify-center rounded-md p-2 transition-colors group-hover:bg-gray-50 md:p-4">
        <Title
          className="mx-auto mb-4 flex w-full flex-1 shrink flex-col items-center justify-center text-xl md:text-2xl "
          order={2}
        >
          <div className="mb-2 flex  w-full items-center justify-between">
            <PostTop category={post.category} user={user} />
          </div>
          <span>{post.title}</span>
        </Title>
        <div className="w-full">
          <Title className="font-medium" order={4}>
            {post.sub_title}
          </Title>
          <PostTimer start_time={post.start_time} />
        </div>
      </div>
    </Link>
  );
});
