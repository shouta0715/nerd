import { Badge, Title } from "@mantine/core";
import React, { FC } from "react";
import { GetPostsQuery } from "../../../generated/graphql";

type Props = {
  post: GetPostsQuery["posts"][0];
};

export const PostItem: FC<Props> = ({ post }) => (
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
        <p>{}</p>
      </div>
    </div>
  </li>
);
