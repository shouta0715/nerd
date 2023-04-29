/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData } from "@tanstack/react-query";
import React, { forwardRef } from "react";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Text } from "src/components/Elements/Text";
import { Comment } from "src/features/comments/components/Comment";
import { CommentsFilter } from "src/features/comments/types";
import {
  GetCommentsEpisodeQuery,
  GetCommentsWorkQuery,
} from "src/graphql/comment/commentQuery.generated";
import { useUserState } from "src/store/user/userState";

type Props = {
  data?: InfiniteData<GetCommentsEpisodeQuery | GetCommentsWorkQuery>;
  filter: CommentsFilter;
  setFilter: React.Dispatch<React.SetStateAction<CommentsFilter>>;
  hasNextPage?: boolean;
  isLoading: boolean;
};

export const Comments = forwardRef<any, Props>(
  ({ data, hasNextPage, filter, setFilter, isLoading }, ref) => {
    const user = useUserState((state) => state.user);

    if (!user) {
      return <Loader className="m-auto" variant="dots" />;
    }

    return (
      <>
        <ul
          className={`relative mx-auto w-full flex-1 space-y-6 px-2 py-4 md:max-w-xl md:px-4 ${
            data?.pages[0].comments.length === 0 ? "hidden" : "block"
          }`}
        >
          <div
            className="flex items-center justify-center"
            onChange={() => {
              setFilter(filter === "new" ? "popular" : "new");
            }}
          >
            <button
              className={`flex items-center rounded-l-md px-4 py-1.5 font-hiragino-sans text-sm ${
                filter === "new"
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-400 text-white hover:bg-indigo-700"
              }`}
              onClick={() => setFilter("new")}
            >
              {isLoading && filter === "new" && (
                <Loader className="mr-2" color="white" size="xs" />
              )}
              <span>新しい順</span>
            </button>
            <button
              className={`flex items-center rounded-r-md px-4 py-1.5 font-hiragino-sans text-sm ${
                filter === "popular"
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-400 text-white hover:bg-indigo-700"
              }`}
              onClick={() => setFilter("popular")}
            >
              <span>いいね順</span>
              {isLoading && filter === "popular" && (
                <Loader className="ml-2" color="white" size="xs" />
              )}
            </button>
          </div>
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
        <Text
          className={`${
            data?.pages[0].comments.length === 0
              ? "grid w-full flex-1 place-items-center text-lg font-semibold"
              : "hidden"
          }`}
          ff="Hiragino Sans"
        >
          一番最初のコメントを書いてみよう！
        </Text>
      </>
    );
  }
);
