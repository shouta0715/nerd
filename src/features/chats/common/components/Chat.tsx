import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Image } from "src/components/Elements/Image";
import { Text } from "src/components/Elements/Text";
import { Chat as ChatType } from "src/features/chats/common/types";
import { timeCommented } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  chat: ChatType;
};

export const Chat: FC<Props> = memo(({ chat }) => {
  const user = useUserState((state) => state.user);

  return (
    <li className="flex w-full animate-comment">
      <figure className="mr-2">
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
      <div className="flex-1">
        <div className="my-1 max-w-full break-words text-xs md:text-sm">
          <span className="inline-flex items-center gap-x-1.5 rounded-full text-gray-500">
            {chat.commenter_name}
            {chat.user_id === user?.id && (
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
            )}
          </span>
        </div>

        <p className="max-w-full break-words text-base text-gray-900">
          {chat.content}
        </p>
        <Text align="inherit" className="text-dimmed" size="xs">
          <span>{timeCommented(chat.comment_time)}</span>
        </Text>
      </div>
    </li>
  );
});
