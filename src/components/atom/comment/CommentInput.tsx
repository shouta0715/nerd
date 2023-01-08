import { Avatar, JsonInput, ThemeIcon } from "@mantine/core";
import { IconSend } from "@tabler/icons";
import React, { FC } from "react";
import { useUserStore } from "../../../store/user/userState";

export const CommentInput: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="border-x-0 border-b-0 border-t border-solid border-gray-200 py-6">
      <div className="flex md:flex-col md:space-y-4">
        <div className="flex items-center space-x-4 pl-6">
          <Avatar src={user?.photoURL} radius="lg" />
          <span className="hidden font-bold md:inline-block">
            {user?.displayName}
          </span>
        </div>
        <form className="flex w-full items-center justify-center px-6">
          <JsonInput
            maxLength={100}
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
