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
        `flex items-center py-1.5`,
        response === "lg" && "hidden flex-1 justify-around lg:flex",

        response === "sp"
          ? "sticky top-0 z-20 justify-between border-b bg-white/80 px-2 before:h-5 before:w-5 before:content-[''] before:md:h-6 before:md:w-6 lg:hidden"
          : ""
      )}
    >
      <Text
        className={clsx(
          "inline-block rounded-none text-xs font-bold  text-indigo-600 transition-colors duration-300 md:text-base ",
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
          "inline-block  text-xs font-bold text-indigo-600 transition-colors duration-300 md:text-base ",
          isChat && "opacity-50",
          mode === "up" ? " text-orange-600" : " text-indigo-600"
        )}
        component="button"
        onClick={() => {
          router.replace({
            query: {
              slug: router.query.slug,
              mode: "comment",
              order: router.query.order ?? "new",
            },
          });
        }}
      >
        コメント
      </Text>
      {response === "sp" && (
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
