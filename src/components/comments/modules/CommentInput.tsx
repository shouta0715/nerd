import { Avatar, Textarea, ThemeIcon } from "@mantine/core";
import { IconSend } from "@tabler/icons";
import React, { FC } from "react";
import { useCommentHandler } from "../../../hooks/handler/useCommentHandler";
import { useCommentInputStore } from "../../../store/comment/commentType";
import { useUserStore } from "../../../store/user/userState";

type Props = {
  postId: string;
};

export const CommentInput: FC<Props> = ({ postId }) => {
  const user = useUserStore((state) => state.user);
  const comment = useCommentInputStore((state) => state.comment);
  const setComment = useCommentInputStore((state) => state.setComment);
  const handleSubmit = useCommentHandler(postId);

  return (
    <div className="fixed bottom-0 left-0 min-h-[5rem] w-full border-x-0 border-b-0 border-t border-solid border-gray-200 bg-white py-2  md:min-h-[10rem]  md:py-6">
      <div className="flex items-center md:flex-col md:items-start  md:space-y-4">
        <div className="flex flex-col items-center pl-6 md:flex-row md:space-x-4">
          <Avatar
            size="md"
            className="mb-2 md:mb-0"
            src={user?.photoURL}
            radius="xl"
          />
          <span className="hidden font-bold md:inline-block">
            {user?.displayName}
          </span>
          <span
            className={`w-[58px]  text-center text-xs font-semibold text-indigo-500 md:pl-0 ${
              comment.content.length === 100 ? "text-red-500" : ""
            }`}
          >{`${comment.content.length}/100`}</span>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e, comment)}
          className="flex w-full items-center justify-center px-4 md:px-6"
        >
          <Textarea
            value={comment.content}
            onChange={(e) =>
              setComment({
                ...comment,
                content: e.currentTarget.value,
              })
            }
            autosize
            placeholder="コメントを入力してください"
            className="h-full flex-1 text-lg"
            classNames={{
              input:
                "w-full border-0 px-2  border-b-2 rounded-none p-0 h-full border-indigo-500 text-[16px]",
            }}
          />
          <button className="group ml-2 flex cursor-pointer items-center justify-center self-end border-none bg-transparent p-1 transition-transform active:scale-90">
            <ThemeIcon size="lg" variant="light" color="grape" radius="md">
              <IconSend />
            </ThemeIcon>
          </button>
        </form>
      </div>
    </div>
  );
};
