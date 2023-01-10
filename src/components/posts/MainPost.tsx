import React, { FC } from "react";
import { useQueryPosts } from "../../hooks/posts/useQueryPosts";
import { Spinner } from "../loading/Spinner";
import { PostItem } from "./PostItem";

export const MainPost: FC = () => {
  const { posts, isLoading } = useQueryPosts();

  if (isLoading)
    <div className="fixed inset-0 z-[999] h-screen w-screen bg-gray-400/70">
      <Spinner />
    </div>;

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
