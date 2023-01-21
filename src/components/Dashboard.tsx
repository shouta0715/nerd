import React, { FC, Suspense } from "react";
import { useUserStore } from "../store/user/userState";
import { PostLoading } from "./layouts/loading/PostLoading";
import { Spinner } from "./layouts/loading/Spinner";
import { MainPost } from "./posts/MainPost";

export const Dashboard: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      {user ? (
        <Suspense fallback={<PostLoading />}>
          <MainPost />
        </Suspense>
      ) : (
        <div className="fixed inset-0 z-[999] h-screen w-screen bg-white">
          <Spinner />
        </div>
      )}
    </div>
  );
};
