import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";
import React, { FC, memo } from "react";

type Props = {
  onClickHandler: () => void;
  count: number;
};

export const UserGroupButton: FC<Props> = memo(({ onClickHandler, count }) => (
  <div className="flex items-center space-x-2">
    <ActionIcon
      onClick={onClickHandler}
      color="green"
      variant="subtle"
      radius="md"
    >
      <UserGroupIcon className="h-6 w-6 cursor-pointer text-blue-500" />
    </ActionIcon>
    <span className="text-blue-500">{`${count}人`}</span>
  </div>
));
