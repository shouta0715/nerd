/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";
import React, { FC, memo } from "react";

type Props = {
  onClickHandler: () => void;
  count: number;
};

export const UserGroupButton: FC<Props> = memo(({ onClickHandler, count }) => (
  <div
    role="button"
    onClick={onClickHandler}
    className="group flex items-center space-x-2 text-sm"
  >
    <ActionIcon radius="md">
      <UserGroupIcon className="h-5 w-5 cursor-pointer text-black group-hover:text-blue-500 md:h-6  md:w-6" />
    </ActionIcon>
    <span className="cursor-pointer text-black group-hover:text-blue-500">{`${count}人`}</span>
  </div>
));
