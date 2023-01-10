import { Avatar } from "@mantine/core";
import React, { FC } from "react";
import { useQueryUser } from "../../../hooks/users/useQueryUser";
import { useUserStore } from "../../../store/user/userState";
import { Comment } from "../../../types/commentType";

type Props = {
  comment: Comment;
};

export const CommentItem: FC<Props> = ({ comment }) => {
  const user = useUserStore((state) => state.user);
  const { data: commentUser } = useQueryUser(comment.user_id);

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
                <Avatar
                  className=""
                  src={commentUser?.userPhotoURL}
                  radius="xl"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`flex h-[38px] items-center  overflow-hidden ${
                    comment.user_id === user?.uid ? "self-end" : ""
                  } `}
                >
                  {commentUser?.userName ?? "匿名"}
                </span>
                <div className="rounded-md bg-[#deffe7] px-4 py-2 font-normal">
                  {comment.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
