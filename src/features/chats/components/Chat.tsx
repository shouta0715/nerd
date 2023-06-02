import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Image } from "src/components/Elements/Image";
import { Text } from "src/components/Elements/Text";
import { Chat as ChatType } from "src/features/chats/types";
import { timeCommented } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  chat: ChatType;
  animate: boolean;
};

export const Chat: FC<Props> = ({ chat, animate }) => {
  const user = useUserState((state) => state.user);

  return (
    <li
      className={`flex w-full ${animate ? "animate-comment" : ""} ${
        user?.id === chat.user?.id ? "flex-row-reverse" : ""
      }`}
    >
      <figure className={`m-0 ${user?.id === chat.user?.id ? "ml-2" : "mr-2"}`}>
        {user?.isDefaultPhoto && user?.id === chat.user?.id ? (
          <Image
            alt="avatar"
            className="rounded-full object-contain"
            height={38}
            src={user?.photo_url ?? ""}
            width={38}
          />
        ) : (
          <Avatar
            user_id={chat.user?.id ?? ""}
            user_name={chat.commenter_name}
          />
        )}
      </figure>
      <div
        className={`max-w-[calc(100%-92px)] flex-1 ${
          user?.id === chat.user?.id ? "text-right" : ""
        }`}
      >
        <Text
          align="inherit"
          className="my-1 max-w-full break-words font-bold"
          size="xs"
        >
          {chat.commenter_name}
        </Text>

        <Text
          align="inherit"
          className={`max-w-full break-words ${
            user?.id === chat.user?.id ? "inline-block text-left" : ""
          }`}
          component="p"
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
};
