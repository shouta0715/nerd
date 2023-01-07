import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useUserStore } from "../../store/user/userState";
import { MainPost } from "./posts/MainPost";

export const Dashboard: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      {user ? (
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>loading</div>}>
            <MainPost />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
};
