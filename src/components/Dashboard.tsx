import React, { FC, Suspense } from "react";
import { useGlobalStore } from "../store/global/globalStore";
import { PostLoading } from "./layouts/loading/PostLoading";
import { MainInvite } from "./posts/MainInvite";

export const Dashboard: FC = () => {
  const authLoading = useGlobalStore((state) => state.authLoading);

  return (
    <div>
      {authLoading ? (
        <PostLoading />
      ) : (
        <Suspense fallback={<PostLoading />}>
          <MainInvite />
        </Suspense>
      )}
    </div>
  );
};
