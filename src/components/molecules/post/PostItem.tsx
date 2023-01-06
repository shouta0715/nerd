/* eslint-disable react/display-name */
import { Badge, Title } from "@mantine/core";
import React, { FC, memo } from "react";
import { GetPostsQuery } from "../../../generated/graphql";
import { useTimer } from "../../../hooks/time/useTimer";

type Props = {
  post: GetPostsQuery["posts"][0];
};

export const PostItem: FC<Props> = memo(({ post }) => {
  const { time } = useTimer(post.start_time);
  const startTime = new Date(post.start_time).toString();
  console.log("PostItem rendered", post.title);

  return (
    <li className=" h-full border-y  border-x-0 border-t-0 border-solid border-gray-300 py-2 first:pt-0 md:py-4">
      <div className="text-center">
        <Title
          className="relative mb-4 flex items-center  justify-center text-xl md:text-2xl"
          order={2}
        >
          <span>{post.title}</span>
          <Badge
            className="absolute right-0"
            color={post.category === "Anime" ? "grape" : "green"}
          >
            {post.category}
          </Badge>
        </Title>
        <div>
          <Title className="font-medium" order={4}>
            {post.sub_title}
          </Title>
          <p>{startTime}</p>
          <p>
            {`開始まであと${time.days}日${time.hours}時間${time.minutes}分${time.seconds}秒`}
          </p>
        </div>
      </div>
    </li>
  );
});
