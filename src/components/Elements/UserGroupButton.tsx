import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";
import React, { FC, memo } from "react";

type Props = {
  onClickHandler: () => void;
  count: number;
};

export const UserGroupButton: FC<Props> = memo(({ onClickHandler, count }) => (
  <div className="flex items-center space-x-2 text-sm">
    <ActionIcon
      onClick={onClickHandler}
      color="green"
      variant="subtle"
      radius="md"
    >
      <UserGroupIcon className="h-5 w-5 cursor-pointer text-blue-500 md:h-6 md:w-6" />
    </ActionIcon>
    <span className="text-blue-500">{`${count}人`}</span>
  </div>
));
