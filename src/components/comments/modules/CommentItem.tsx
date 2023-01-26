import { Avatar, Text } from "@mantine/core";
import React, { FC, memo } from "react";
import { timeProcessing } from "../../../hooks/utils/timeProcessing";
import { useUserStore } from "../../../store/user/userState";
import { Comment } from "../../../types/commentType";

type Props = {
  comment: Comment;
};

export const CommentItem: FC<Props> = memo(({ comment }) => {
  const user = useUserStore((state) => state.user);
  const { timeCommented } = timeProcessing();

  return (
    <li>
      <div className="flex">
        <div
          className={`flex w-full ${
            comment.user_id === user?.uid ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex w-[80%]  ${
              comment.user_id === user?.uid ? "justify-end " : "justify-start"
            } `}
          >
            <div
              className={`flex items-center ${
                comment.user_id === user?.uid ? "flex-row-reverse" : ""
              }  `}
            >
              <div
                className={`mb-auto ${
                  comment.user_id === user?.uid ? "ml-4" : "mr-4"
                } `}
              >
                <Avatar className="" src={comment.user.photo_url} radius="xl" />
              </div>
              <div className="flex flex-col space-y-1">
                <span
                  className={`flex h-[38px] items-center  overflow-hidden ${
                    comment.user_id === user?.uid ? "self-end" : ""
                  } `}
                >
                  {comment.user.user_name !== "anonymous"
                    ? comment.user.user_name
                    : "匿名"}
                </span>
                <div
                  className={`w-fit rounded-md bg-[#deffe7] px-4 py-2 font-normal ${
                    comment.user_id === user?.uid ? "self-end" : ""
                  } `}
                >
                  <Text>{comment.content}</Text>
                </div>
                <Text
                  className={`px-2 ${
                    comment.user_id === user?.uid ? "self-end" : ""
                  }`}
                  color="gray"
                  size="xs"
                >
                  {timeCommented(comment.time)}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});
