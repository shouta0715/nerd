import React, { FC, Suspense } from "react";
import { useGlobalStore } from "../store/global/globalStore";
import { PostLoading } from "./layouts/loading/PostLoading";
import { MainPost } from "./posts/MainPost";

export const Dashboard: FC = () => {
  const authLoading = useGlobalStore((state) => state.authLoading);

  return (
    <div>
      {authLoading ? (
        <PostLoading />
      ) : (
        <Suspense fallback={<PostLoading />}>
          <MainPost />
        </Suspense>
      )}
    </div>
  );
};
