import React, { FC } from "react";
import { useQueryPosts } from "../../hooks/posts/useQueryPosts";

export const Post: FC = () => {
  const { data } = useQueryPosts();

  return <div>Post</div>;
};
