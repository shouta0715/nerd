import React, { FC } from "react";
import { useUserStore } from "../store/user/userState";
import { Spinner } from "./loading/Spinner";
import { MainPost } from "./posts/MainPost";

export const Dashboard: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      {user ? (
        <MainPost />
      ) : (
        <div className="fixed inset-0 z-[999] h-screen w-screen bg-gray-400/70">
          <Spinner />
        </div>
      )}
    </div>
  );
};
