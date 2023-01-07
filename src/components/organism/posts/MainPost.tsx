import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryPosts } from "../../../hooks/posts/useQueryPosts";
import { PostItem } from "../../molecules/post/PostItem";

export const MainPost: FC = () => {
  const { posts } = useQueryPosts();

  return (
    <div className="">
      <ul className="p-6 py-4">
        {posts?.map((post) => (
          <ErrorBoundary key={post.id} fallback={<div>error</div>}>
            <Suspense fallback={<div>loading</div>}>
              <PostItem post={post} />{" "}
            </Suspense>
          </ErrorBoundary>
        ))}
      </ul>
    </div>
  );
};
