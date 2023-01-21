import React, { FC } from "react";
import { useQueryPosts } from "../../hooks/posts/useQueryPosts";
import { PostItem } from "./PostItem";

export const MainPost: FC = () => {
  const { posts } = useQueryPosts();

  return (
    <div>
      <ul className="relative p-4 py-4 md:p-6">
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
