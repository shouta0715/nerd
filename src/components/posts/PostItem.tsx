/* eslint-disable react/display-name */
import { Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { GetPostsQuery } from "../../generated/graphql";
import { useQueryUser } from "../../hooks/users/useQueryUser";
import { PostTimer } from "./modules/PostTimer";
import { PostTop } from "./modules/PostTop";

type Props = {
  post: GetPostsQuery["posts"][0];
};

export const PostItem: FC<Props> = memo(({ post }) => {
  const { data: user } = useQueryUser(post.user_id);

  return (
    <li className=" group relative block h-full overflow-x-hidden border-y border-x-0 border-t-0 border-solid border-gray-300 py-4 first:pt-0">
      <Link
        href={{
          pathname: `/category/${post.category}/${post.id}`,
        }}
        className="absolute inset-0"
      />
      <div className="flex flex-col items-center justify-center rounded-md p-2 transition-colors group-hover:bg-gray-50 md:p-4">
        <div className="mx-auto mb-4 flex w-full flex-1 shrink flex-col items-center justify-center">
          <div className="mb-2 flex  w-full items-center justify-between">
            <PostTop category={post.category} user={user} />
          </div>
          <Title className="text-2xl md:text-3xl">{post.title}</Title>
        </div>
        <div className="w-full">
          <Title className="font-medium" order={4}>
            {post.sub_title}
          </Title>
          <PostTimer
            parent="post"
            post_id={post.id}
            start_time={post.start_time}
          />
        </div>
      </div>
    </li>
  );
});
