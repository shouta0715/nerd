/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Image } from "src/components/Elements/Image";
import { Text } from "src/components/Elements/Text";
import { Reply as TypeReply } from "src/features/comments/common/types";
import { Like } from "src/features/likes/components/Like";
import { useReply } from "src/features/replies/hooks/useReply";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  reply: TypeReply;
  original_id: string;
};

export const Reply: FC<Props> = ({ reply, original_id }) => {
  const { handleClick } = useReply();
  const user = useUserState((state) => state.user);

  return (
    <li className="flex w-full">
      <figure className="mr-2">
        {user?.isDefaultPhoto && user?.id === reply.user?.id ? (
          <Image
            alt="avatar"
            className="rounded-full object-contain"
            height={32}
            src={user?.photo_url ?? ""}
            width={32}
          />
        ) : (
          <Avatar
            size="sm"
            user_id={reply.user?.id ?? ""}
            user_name={reply.commenter_name}
          />
        )}
      </figure>
      <div className="flex-1">
        <div
          className="w-full"
          onClick={() =>
            handleClick({
              reply_to: reply.id,
              replied_to_commenter_name: reply.commenter_name,
            })
          }
          role="button"
        >
          <Text className="my-1 flex flex-col" size="xs">
            <span className="inline-flex items-center gap-x-1.5 rounded-full text-gray-500">
              {reply.commenter_name}
              {reply.user_id === user?.id && (
                <CheckCircleIcon className="h-3 w-3 text-green-500" />
              )}
            </span>
            {reply.replied_to_commenter_name &&
              original_id !== reply.reply_to && (
                <span className="text-blue-500">
                  @{reply.replied_to_commenter_name}に返信
                </span>
              )}
          </Text>
          <Text className="break-words text-sm" component="p">
            {reply.content}
          </Text>
        </div>
        <Text
          className="flex items-center justify-between space-x-2"
          color="dimmed"
          component="div"
          size="xs"
        >
          <div className="flex items-center justify-center">
            <span className="text-dimmed">
              {formatTimeDistance(reply.created_at)}
            </span>
            <Button
              className="border-none p-0 text-xs text-black"
              onClick={() =>
                handleClick({
                  reply_to: reply.id,
                  replied_to_commenter_name: reply.commenter_name,
                })
              }
              size="xs"
            >
              返信
            </Button>
          </div>
          <Like
            comment_id={reply.id}
            is_like={reply.is_like || false}
            like_count={reply.likes_aggregate.aggregate?.count || 0}
          />
        </Text>
      </div>
    </li>
  );
};
