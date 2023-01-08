import { Avatar, Textarea, ThemeIcon } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSend } from "@tabler/icons";
import React, { FC } from "react";
import { useCommentInputStore } from "../../../store/comment/commentType";
import { useUserStore } from "../../../store/user/userState";

export const CommentInput: FC = () => {
  const user = useUserStore((state) => state.user);
  const message = useCommentInputStore((state) => state.message);
  const setMessage = useCommentInputStore((state) => state.setMessage);
  const match = useMediaQuery("(min-width: 768px)");

  return (
    <div className="fixed bottom-14 h-[70px] w-full border-x-0 border-b-0 border-t border-solid border-gray-200 py-2 md:static md:h-auto md:py-6">
      <div className="flex items-center md:flex-col md:items-start  md:space-y-4">
        <div className="flex flex-col items-center pl-6 md:flex-row md:space-x-4">
          <Avatar
            size={match ? "md" : "sm"}
            className="mb-2 md:mb-0"
            src={user?.photoURL}
            radius="xl"
          />
          <span className="hidden font-bold md:inline-block">
            {user?.displayName}
          </span>
          <span
            className={`w-[58px]  text-center text-xs font-semibold text-indigo-500 md:pl-0 ${
              message.length === 100 ? "text-red-500" : ""
            }`}
          >{`${message.length}/100`}</span>
        </div>
        <form className="flex w-full items-center justify-center px-4 md:px-6">
          <Textarea
            maxLength={100}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value.length > 100 ? message : e.target.value)
            }
            autosize
            placeholder="コメントを入力してください"
            className="h-full flex-1 text-lg"
            classNames={{
              input:
                "w-full border-0 px-2  border-b-2 rounded-none p-0 h-full border-indigo-500 text-base",
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
