/* eslint-disable @typescript-eslint/no-explicit-any */
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
};

export const Comments = forwardRef<any, Props>(
  ({ data, hasNextPage, filter, setFilter, isLoading }, ref) => {
    const user = useUserState((state) => state.user);

    if (!user) {
      return <Loader className="m-auto" size="xl" variant="dots" />;
    }

    return (
      <>
        <ul
          className={`mx-auto w-full flex-1 space-y-6 px-2 pt-4 md:max-w-xl md:px-4 ${
            data?.pages[0].comments.length === 0 ? "hidden" : "block"
          }`}
        >
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
        <Text
          className={`${
            data?.pages[0].comments.length === 0
              ? "flex w-full flex-1 items-center justify-center text-gray-500"
              : "hidden"
          }`}
        >
          コメントはまだありません
        </Text>
      </>
    );
  }
);
