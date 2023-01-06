import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useUserStore } from "../../store/user/userState";
import { Post } from "./posts/Post";

export const Dashboard: FC = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);

  return (
    <div>
      {user ? (
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>loading</div>}>
            <Post />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
};
