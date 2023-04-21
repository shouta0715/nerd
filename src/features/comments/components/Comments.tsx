/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData } from "@tanstack/react-query";
import React, { forwardRef } from "react";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Comment } from "src/features/comments/components/Comment";
import {
  GetCommentsEpisodeQuery,
  GetCommentsWorkQuery,
} from "src/graphql/comment/commentQuery.generated";
import { useUserState } from "src/store/user/userState";

type Props = {
  data?: InfiniteData<GetCommentsEpisodeQuery | GetCommentsWorkQuery>;

  hasNextPage?: boolean;
};

export const Comments = forwardRef<any, Props>(({ data, hasNextPage }, ref) => {
  const user = useUserState((state) => state.user);

  if (!user) {
    return <Loader className="m-auto" variant="dots" />;
  }

  return (
    <ul className="relative mx-auto w-full flex-1 space-y-6 px-2 py-4 md:max-w-xl  md:px-4">
      {data?.pages.map((page) =>
        page.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
      <div
        ref={ref}
        className={`flex h-20 items-center justify-center text-center  ${
          hasNextPage ? "block" : "hidden"
        }`}
      >
        <Loader variant="oval" />
      </div>
    </ul>
  );
});
