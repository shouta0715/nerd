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

  response: "lg" | "sp";
  showNext?: boolean;
};

export const Nav: FC<Props> = ({ isChat, response, showNext = true }) => {
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
        `flex items-center py-1.5`,
        response === "lg" ? "hidden flex-1  justify-around lg:flex" : "",
        response === "sp"
          ? "sticky top-0 z-20 justify-between border-b bg-white/80 px-2 lg:hidden"
          : "",
        response === "sp" && !showNext
          ? "after:h-7 after:w-7 after:content-['']"
          : ""
      )}
    >
      {response === "sp" && (
        <button
          aria-label="タイマーを開く"
          className="h-4 w-4 transition-transform active:translate-y-0.5 md:h-6 md:w-6 lg:hidden"
          onClick={() => setIsTimerOpen(!isTimerOpen)}
        >
          <TimerIcon />
        </button>
      )}
      <Text
        className={clsx(
          "inline-block text-xs font-bold transition-colors duration-300 md:text-base",
          mode === "up" ? " text-orange-600" : " text-indigo-600",
          !isChat && "opacity-50"
        )}
        component="button"
        onClick={() => {
          router.replace({
            query: {
              slug: router.query.slug,
              mode: "chat",
            },
          });
        }}
      >
        チャット
      </Text>
      <Text
        className={clsx(
          "inline-block text-xs font-bold transition-colors duration-300 md:text-base ",
          isChat && "opacity-50",
          mode === "up" ? " text-orange-600" : " text-indigo-600"
        )}
        component="button"
        onClick={() => {
          stop();
          router.replace({
            query: {
              mode: "comment",
              slug: router.query.slug,
              order: router.query.order ?? "new",
            },
          });
        }}
      >
        コメント
      </Text>
      {response === "sp" && showNext && (
        <button
          aria-label="エピソードメニューを開く"
          className="h-5 w-5 transition-transform active:translate-y-0.5 md:h-6 md:w-6 lg:hidden"
          onClick={() => setIsNextOpen(!isNextOpen)}
        >
          <ListBulletIcon />
        </button>
      )}
    </nav>
  );
};
