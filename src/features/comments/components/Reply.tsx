/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { useReply } from "src/features/comments/hooks/useReply";
import { Reply as TypeReply } from "src/features/comments/types";
import { Like } from "src/features/likes/components/Like";
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
      <figure className="m-0 mr-2">
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
            user_id={reply.user?.id}
            user_name={reply.commenter_name}
          />
        )}
      </figure>
      <div className="max-w-[calc(100%-46px)] flex-1">
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
          <Text className="flex flex-col font-bold" size="xs">
            <span>{reply.commenter_name}</span>
            {reply.replied_to_commenter_name &&
              original_id !== reply.reply_to && (
                <span className="text-blue-500">
                  @{reply.replied_to_commenter_name}に返信
                </span>
              )}
          </Text>
          <Text className="break-words py-1 text-sm" component="p">
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
