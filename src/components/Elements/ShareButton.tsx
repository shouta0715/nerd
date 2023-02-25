import { ShareIcon } from "@heroicons/react/24/outline";
import { ActionIcon } from "@mantine/core";
import React, { FC, memo } from "react";

type Props = {
  onClickHandler: () => void;
};

export const ShareButton: FC<Props> = memo(({ onClickHandler }) => (
  <ActionIcon onClick={onClickHandler} className="group">
    <ShareIcon className="h-5 w-5 text-black group-hover:text-green-500 md:h-6 md:w-6" />
  </ActionIcon>
));
