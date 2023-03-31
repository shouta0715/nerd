/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HeartIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Text } from "src/components/Elements/Text";
import { useInputCommentState, useRefState } from "src/features/comments/store";
import { Reply as TypeReply } from "src/features/comments/types";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";

type Props = {
  reply: TypeReply;
  original_id: string;
};

export const Reply: FC<Props> = ({ reply, original_id }) => {
  const focus = useRefState((state) => state.focusRef);
  const [inputState, setInputState] = useInputCommentState((state) => [
    state.inputComment,
    state.setInputComment,
  ]);

  return (
    <li
      className="flex w-full"
      onClick={() => {
        setInputState({
          ...inputState,
          reply_to: reply.id,
          replied_to_commenter_name: reply.commenter_name,
        });
        focus();
      }}
      role="button"
    >
      <figure className="m-0 mr-2">
        <Avatar
          size="sm"
          user_id={reply.user?.id}
          user_name={reply.commenter_name}
        />
      </figure>
      <div className="max-w-[calc(100%-46px)] flex-1">
        <Text className="flex flex-col font-bold" ff="Hiragino Sans" size="xs">
          <span>{reply.commenter_name}</span>
          {reply.replied_to_commenter_name &&
            original_id !== reply.reply_to && (
              <span className="text-blue-500">
                @{reply.replied_to_commenter_name}に返信
              </span>
            )}
        </Text>
        <Text
          className="break-words py-1 text-sm"
          component="p"
          ff="Hiragino Sans"
        >
          {reply.content}
        </Text>
        <Text
          className="flex items-center justify-between space-x-2"
          color="dimmed"
          component="div"
          ff="Hiragino Sans"
          size="xs"
        >
          <span className="text-dimmed">
            {formatTimeDistance(reply.created_at)}
          </span>
          <div className="flex items-center text-dimmed">
            <HeartIcon
              className={`h-5 w-5 ${
                reply.is_like ? "fill-pink-500 text-pink-500" : "text-gray-500"
              }`}
            />
            <span
              className={`ml-1 text-sm ${
                reply.is_like ? "text-pink-500" : "text-gray-500"
              }`}
            >
              {reply.likes_aggregate.aggregate?.count}
            </span>
          </div>
        </Text>
      </div>
    </li>
  );
};
