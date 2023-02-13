import { ActionIcon } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import React, { FC, memo } from "react";

type Props = {
  onClickHandler: () => void;
};

export const ShareButton: FC<Props> = memo(({ onClickHandler }) => (
  <ActionIcon
    onClick={onClickHandler}
    color="green"
    variant="subtle"
    radius="md"
  >
    <IconUpload className="h-5 w-5 md:h-6 md:w-6" />
  </ActionIcon>
));
