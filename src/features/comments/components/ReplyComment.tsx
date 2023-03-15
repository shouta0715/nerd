import { HandThumbDownIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Text } from "src/components/Elements/Text";
import { Reply as TypeReply } from "src/features/comments/types";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";

type Props = {
  reply: TypeReply;
};

export const Reply: FC<Props> = ({ reply }) => (
  <li className="flex w-full">
    <figure className="m-0 mr-2">
      <Avatar
        size="sm"
        user_id={reply.user?.id}
        user_name={reply.commenter_name}
      />
    </figure>
    <div className="max-w-[calc(100%-46px)] flex-1">
      <Text ff="Hiragino Sans" size="xs" className="font-bold">
        {reply.commenter_name}
      </Text>
      <Text
        component="p"
        ff="Hiragino Sans"
        className="break-words py-1 text-sm"
      >
        {reply.content}
      </Text>
      <Text
        ff="Hiragino Sans"
        size="xs"
        color="dimmed"
        component="div"
        className="flex items-center justify-between space-x-2"
      >
        <span>{formatTimeDistance(reply.created_at)}</span>
        <div className="flex place-items-center">
          <div className="flex items-center">
            <HeartIcon className="h-5 w-5" />
            <span>1</span>
          </div>
          <div className="flex items-center">
            <HandThumbDownIcon className="h-5 w-5" />

            <span>100</span>
          </div>
        </div>
      </Text>
    </div>
  </li>
);
