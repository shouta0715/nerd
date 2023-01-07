import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryPosts } from "../../../hooks/posts/useQueryPosts";
import { PostItem } from "../../molecules/post/PostItem";

export const MainPost: FC = () => {
  const { posts } = useQueryPosts();

  return (
    <div className="">
      <ul className="p-4 py-4 md:p-6">
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>loading</div>}>
            {posts?.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Suspense>
        </ErrorBoundary>
      </ul>
    </div>
  );
};
