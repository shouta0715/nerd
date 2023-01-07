/* eslint-disable react/display-name */
import { Avatar, Badge, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { GetPostsQuery } from "../../../generated/graphql";
import { useTimer } from "../../../hooks/time/useTimer";
import { useQueryUser } from "../../../hooks/users/useQueryUser";
import { useCategoryToJa } from "../../../hooks/utils/useCategoryToJa";

type Props = {
  post: GetPostsQuery["posts"][0];
};

export const PostItem: FC<Props> = memo(({ post }) => {
  const { time } = useTimer(post.start_time);
  const startTime = new Date(post.start_time).toString();
  const { categoryToJa } = useCategoryToJa();
  const { data: user } = useQueryUser(post.user_id);

  return (
    <Link
      href="/"
      className=" group block h-full flex-1 border-y border-x-0 border-t-0 border-solid border-gray-300 py-4 first:pt-0"
    >
      <div className="flex  flex-col items-center justify-center rounded-md p-4 transition-colors group-hover:bg-gray-50">
        <Title
          className="mx-auto mb-4 flex w-full flex-1 shrink flex-col items-center justify-center text-xl md:text-2xl "
          order={2}
        >
          <div className="mb-2 flex  w-full items-center justify-between">
            <Avatar radius="xl" src={user?.userPhotoURL} />
            <Badge color={post.category === "Anime" ? "grape" : "green"}>
              {categoryToJa(post.category)}
            </Badge>
          </div>
          <span>{post.title}</span>
        </Title>
        <div className="w-full">
          <Title className="font-medium" order={4}>
            {post.sub_title}
          </Title>
          <p>{startTime}</p>
          <p>
            {`開始まであと${time.days}日${time.hours}時間${time.minutes}分${time.seconds}秒`}
          </p>
        </div>
      </div>
    </Link>
  );
});
