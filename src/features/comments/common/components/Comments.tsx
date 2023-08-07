/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { MutationKey } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { forwardRef } from "react";
import {
  ListBox,
  ListBoxOption,
} from "src/components/Elements/Listbox/Listbox";
import { Loader } from "src/components/Elements/Loader";
import { Comment } from "src/features/comments/common/components/Comment";
import { Optimistic } from "src/features/comments/common/components/Optimistic";
import {
  CommentsFilter,
  OptimisticMutateVariables,
} from "src/features/comments/common/types";
import { GetCommentsEpisodeQuery, GetCommentsWorkQuery } from "src/gql/graphql";
import { useOptimisticState } from "src/hooks/useOptimisticState";
import { useUserState } from "src/store/user/userState";

interface OptionProps extends ListBoxOption {
  id: string;
  name: string;
}

const options: OptionProps[] = [
  { id: "new", name: "新しい順" },
  { id: "popular", name: "いいね順" },
];

type Props = {
  data?: GetCommentsEpisodeQuery["comments"] | GetCommentsWorkQuery["comments"];
  hasNextPage?: boolean;
  isLoading: boolean;
  refetchHandler: () => void;
  mutateKey: MutationKey;
};

export const Comments = forwardRef<any, Props>(
  ({ data, hasNextPage, isLoading, refetchHandler, mutateKey }, ref) => {
    const user = useUserState((state) => state.user);
    const mutate = useOptimisticState<OptimisticMutateVariables>(mutateKey);
    const router = useRouter();

    if (!user) {
      return <Loader className="m-auto" size="xl" variant="dots" />;
    }

    return (
      <>
        <div className="flex w-full flex-1 flex-col gap-y-1.5 p-2 md:p-4">
          <div className="flex max-w-full flex-col items-center justify-center gap-y-1 break-words text-xs text-dimmed md:text-sm">
            <div>
              チャットは
              <button
                className="text-indigo-600 underline hover:text-indigo-500"
                onClick={() =>
                  router.replace({
                    query: {
                      mode: "chat",
                      slug: router.query.slug,
                    },
                  })
                }
              >
                こちら
              </button>
            </div>
            <span>右下のボタンを押すと、最新のコメントを読み込めます</span>
          </div>
          <div className="flex items-center justify-end space-x-4 px-2">
            <ListBox<CommentsFilter, OptionProps>
              buttonLabel={(value) =>
                value === "new" ? "新しい順" : "いいね順"
              }
              isLoading={isLoading}
              onChange={(value) => {
                router.push({
                  query: { ...router.query, order: value },
                });
              }}
              options={options}
              value={router.query.order === "popular" ? "popular" : "new"}
            />
          </div>
          {data?.length === 0 && mutate.length === 0 && (
            <p className="flex max-w-full flex-1 items-center justify-center break-words text-sm text-dimmed">
              まだコメントはありません
            </p>
          )}
          <ul>
            {mutate.length !== 0 &&
              mutate?.map((comment) => {
                return comment.variables.reply_to ? null : (
                  <Optimistic
                    key={comment.submittedAt}
                    comment={comment.variables}
                  />
                );
              })}
            {data?.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
          <div
            ref={ref}
            className={`flex h-20 items-center justify-center text-center  ${
              hasNextPage ? "block" : "hidden"
            }`}
          >
            <Loader size="xl" variant="dots" />
          </div>
        </div>

        <div className="sticky bottom-20 flex w-full justify-end px-2 lg:px-3">
          <div className="grid h-10 w-10 place-items-center  rounded-full  bg-indigo-600  shadow-md shadow-indigo-400 transition-transform active:translate-y-1 lg:right-14">
            {isLoading ? (
              <Loader size="xl" theme="white" />
            ) : (
              <button
                aria-label="最新のコメントを読み込む"
                className="grid h-full w-full place-items-center text-white "
                onClick={refetchHandler}
              >
                <ArrowPathIcon className="h-6 w-6 stroke-white" />
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
);
