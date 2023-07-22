import { ListBulletIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { FC } from "react";
import TimerIcon from "public/icons/TimerIcon.svg";
import { Text } from "src/components/Elements/Text";

import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  response: "lg" | "sp";
  showNext?: boolean;
};

export const Nav: FC<Props> = ({
  setIsChat,
  isChat,
  response,
  showNext = true,
}) => {
  const mode = useTimerState((state) => state.mode);
  const stop = useTimerState((state) => state.interval.stop);
  const { isNextOpen, setIsNextOpen, isTimerOpen, setIsTimerOpen } =
    useOpenState((state) => ({
      isNextOpen: state.isNextOpen,
      setIsNextOpen: state.setIsNextOpen,
      isTimerOpen: state.isTimerOpen,
      setIsTimerOpen: state.setIsTimerOpen,
    }));
  const router = useRouter();

  return (
    <nav
      className={clsx(
        `flex items-center`,
        response === "lg" && "hidden flex-1  justify-around lg:flex",

        response === "sp" &&
          "sticky top-0 z-20 border-b bg-white/80 px-2 lg:hidden",
        response === "sp" &&
          !showNext &&
          "after:h-7 after:w-7 after:content-['']",

        response === "sp" && "justify-between px-2"
      )}
    >
      {response === "sp" && (
        <button
          className="m-1 h-6 w-6 transition-transform active:translate-y-0.5 lg:hidden"
          onClick={() => setIsTimerOpen(!isTimerOpen)}
        >
          <TimerIcon />
        </button>
      )}
      <Text
        className={clsx(
          "inline-block cursor-pointer rounded-none text-base  font-bold text-indigo-500 transition-colors duration-300 ",
          mode === "up" ? " text-orange-500" : " text-indigo-500",
          !isChat && "opacity-50"
        )}
        component="button"
        onClick={() => {
          setIsChat(true);
          router.replace({
            query: {
              ...router.query,
              mode: "chat",
            },
          });
        }}
      >
        チャット
      </Text>
      <Text
        className={clsx(
          "inline-block cursor-pointer rounded-none py-2 text-sm font-bold text-indigo-500 transition-colors duration-300 md:text-base ",
          isChat && "opacity-50",
          mode === "up" ? " text-orange-500" : " text-indigo-500"
        )}
        component="button"
        onClick={() => {
          setIsChat(false);
          stop();
          router.replace({
            query: {
              mode: "comment",
              slug: router.query.slug,
            },
          });
        }}
      >
        コメント
      </Text>
      {response === "sp" && showNext && (
        <button
          className="h-7 w-7 transition-transform active:translate-y-0.5 lg:hidden"
          onClick={() => setIsNextOpen(!isNextOpen)}
        >
          <ListBulletIcon />
        </button>
      )}
    </nav>
  );
};
