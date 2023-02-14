import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";
import React, { FC } from "react";

type Props = {
  onClickHandler: () => void;
  count: number;
};

export const CommentsButton: FC<Props> = ({ onClickHandler, count }) => (
  <div className="flex items-center space-x-2">
    <ActionIcon onClick={onClickHandler} variant="subtle" radius="md">
      <ChatBubbleOvalLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
    </ActionIcon>
    <span className="text-black">{count}</span>
  </div>
);
