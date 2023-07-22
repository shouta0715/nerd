/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { InfiniteData } from "@tanstack/react-query";
import React, { Fragment, forwardRef } from "react";
import {
  ListBox,
  ListBoxOption,
} from "src/components/Elements/Listbox/Listbox";
import { Loader } from "src/components/Elements/Loader";
import { Text } from "src/components/Elements/Text";
import { Comment } from "src/features/comments/components/Comment";
import { CommentsFilter } from "src/features/comments/types";
import {
  GetCommentsEpisodeQuery,
  GetCommentsWorkQuery,
} from "src/graphql/comment/commentQuery.generated";
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
  data?: InfiniteData<GetCommentsEpisodeQuery | GetCommentsWorkQuery>;
  filter: CommentsFilter;
  setFilter: React.Dispatch<React.SetStateAction<CommentsFilter>>;
  hasNextPage?: boolean;
  isLoading: boolean;
  refetchHandler: () => void;
};

export const Comments = forwardRef<any, Props>(
  (
    { data, hasNextPage, filter, setFilter, isLoading, refetchHandler },
    ref
  ) => {
    const user = useUserState((state) => state.user);

    if (!user) {
      return <Loader className="m-auto" size="xl" variant="dots" />;
    }

    return (
      <>
        {data?.pages[0].comments.length !== 0 ? (
          <ul className="flex w-full flex-1 flex-col space-y-3 px-2  pb-2 pt-4 md:px-4">
            <p className="flex max-w-full justify-center break-words text-sm text-dimmed">
              右下のボタンを押すと、最新のコメントを読み込めます
            </p>
            <div className="flex items-center justify-end space-x-4 px-2">
              <ListBox<CommentsFilter, OptionProps>
                buttonLabel={(value) =>
                  value === "new" ? "新しい順" : "いいね順"
                }
                filter={filter}
                isLoading={isLoading}
                options={options}
                setFilter={setFilter}
              />
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
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-2 py-4 md:px-4">
            <p className="flex max-w-full justify-center break-words text-sm text-dimmed">
              右下のボタンを押すと、最新のコメントを読み込めます
            </p>
            <Text className="flex w-full flex-1 items-center justify-center text-gray-500">
              コメントはまだありません
            </Text>
          </div>
        )}
        <div className="sticky bottom-20 flex w-full justify-end px-2 lg:px-3">
          <div className="grid h-10 w-10 place-items-center  rounded-full  bg-indigo-600  shadow-md shadow-indigo-400 transition-transform active:translate-y-1 lg:right-14">
            {isLoading ? (
              <Loader size="xl" theme="white" />
            ) : (
              <button
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
