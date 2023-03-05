import { ActionIcon, UnstyledButton } from "@mantine/core";
import {
  IconChevronRight,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons";
import React, { FC, useState } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

export const PlayButton: FC = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const interval = useTimerState((state) => state.interval);

  return (
    <div
      className={`fixed bottom-32 right-0 rounded-l-md  border-indigo-500 bg-indigo-500 p-2 shadow-xl transition-transform lg:hidden ${
        showPlayButton ? "" : "translate-x-full"
      }`}
    >
      <UnstyledButton
        onClick={() => setShowPlayButton((p) => !p)}
        className="absolute top-2 -left-4 flex h-1/2 w-4 items-center justify-center rounded-r-none rounded-l-md border-l bg-indigo-500 shadow-xl"
      >
        <IconChevronRight
          color="white"
          className={` ${showPlayButton ? "" : "-rotate-180 transform"}`}
        />
      </UnstyledButton>
      <ActionIcon
        variant="transparent"
        size={40}
        className="bg-white"
        onClick={() => {
          interval?.toggle();
        }}
      >
        {interval?.active ? (
          <IconPlayerPause
            size={20}
            className="fill-indigo-500 text-indigo-500"
          />
        ) : (
          <IconPlayerPlay
            size={20}
            className="fill-indigo-500 text-indigo-500"
          />
        )}
      </ActionIcon>
    </div>
  );
};
