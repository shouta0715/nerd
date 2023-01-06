import React, { FC } from "react";
import { useQueryPosts } from "../../../hooks/posts/useQueryPosts";
import { PostItem } from "../../molecules/post/PostItem";

export const MainPost: FC = () => {
  const { posts } = useQueryPosts();

  return (
    <div className="">
      <ul className="p-6 py-4">
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
