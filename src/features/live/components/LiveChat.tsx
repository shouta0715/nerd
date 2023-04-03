import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Text } from "src/components/Elements/Text";
import { Chat } from "src/features/chats/types";
import { timeCommented } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  chat: Chat;
};

export const LiveChat: FC<Props> = memo(({ chat }) => {
  const user = useUserState((state) => state.user);

  return (
    <li
      className={`flex w-full animate-comment transition-all ${
        user?.id === chat.user?.id ? "flex-row-reverse" : ""
      }`}
    >
      <figure className={`m-0 ${user?.id === chat.user?.id ? "ml-2" : "mr-2"}`}>
        <Avatar user_id={chat.user?.id} user_name={chat.commenter_name} />
      </figure>
      <div
        className={`max-w-[calc(100%-92px)] flex-1 ${
          user?.id === chat.user?.id ? "text-right" : ""
        }`}
      >
        <Text
          align="inherit"
          className="my-1 max-w-full break-words font-bold"
          ff="Hiragino Sans"
          size="xs"
        >
          {chat.commenter_name}
        </Text>

        <Text
          align="inherit"
          className="max-w-full break-words"
          component="p"
          ff="Hiragino Sans"
          size="sm"
        >
          {chat.content}
        </Text>
        <Text align="inherit" className="text-dimmed" size="xs">
          <span>{timeCommented(chat.comment_time)}</span>
        </Text>
      </div>
    </li>
  );
});
