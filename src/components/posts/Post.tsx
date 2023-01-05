import React, { FC } from "react";
import { useQueryPosts } from "../../hooks/posts/useQueryPosts";

export const Post: FC = () => {
  const { data } = useQueryPosts();
  console.log(data);

  return <div>Post</div>;
};
