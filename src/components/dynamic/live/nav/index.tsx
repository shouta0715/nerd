import { ListBulletIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

import { useOpenState } from "src/features/episodes/store";
import { LiveTimer } from "src/features/timer/types";

type Props = {
  isChat: boolean;

  response: "lg" | "sp";
  mode: LiveTimer["mode"];
};

export const Nav: FC<Props> = ({ isChat, response, mode }) => {
  const [isNextOpen, setIsNextOpen] = useOpenState((state) => [
    state.isNextOpen,
    state.setIsNextOpen,
  ]);
  const router = useRouter();

  return (
    <nav
      className={clsx(
        `flex items-center`,
        response === "lg" && "hidden flex-1 justify-around lg:flex",

        response === "sp"
          ? "sticky top-0 z-20 justify-between border-b bg-white/80 px-2 before:h-7 before:w-7 before:content-[''] lg:hidden"
          : ""
      )}
    >
      <Text
        className={clsx(
          "inline-block cursor-pointer rounded-none text-base  font-bold text-indigo-500 transition-colors duration-300 ",
          mode === "up" ? " text-orange-500" : " text-indigo-500",
          !isChat && "opacity-50"
        )}
        component="button"
        onClick={() => {
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
          router.replace({
            query: {
              ...router.query,
              mode: "comment",
            },
          });
        }}
      >
        コメント
      </Text>
      {response === "sp" && (
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
