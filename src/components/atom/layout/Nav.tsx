import { BellIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Burger,
  Flex,
  Indicator,
  ScrollArea,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { useGlobalStore } from "../../../store/global/globalStore";
import { useUserStore } from "../../../store/user/userState";

export const Nav: FC = () => {
  const isOpenBurger = useGlobalStore((state) => state.isOpenBurger);
  const changeIsOpenBurger = useGlobalStore(
    (state) => state.changeIsOpenBurger
  );
  const user = useUserStore((state) => state.user);

  return (
    <div className="z-50 hidden h-screen w-[12%] flex-col items-center justify-around border-r border-l-0 border-t-0 border-b-0 border-solid border-gray-200 bg-white pt-16 md:flex">
      <div className="mb-10 hidden  md:block">ICON</div>
      <ScrollArea className="w-full">
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="h-full w-full space-y-10 "
        >
          <Burger
            opened={isOpenBurger}
            size={36}
            onClick={changeIsOpenBurger}
          />
          <Link
            href="/"
            className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <Tooltip
              label="ホーム"
              color="grape"
              withArrow
              arrowPosition="center"
              offset={14}
            >
              <HomeIcon className="h-10 w-10  cursor-pointer stroke-black stroke-[0.5px] transition-all active:scale-90" />
            </Tooltip>
          </Link>

          <Link
            href="/auth/login"
            className="order-1 flex items-center justify-center"
          >
            <ThemeIcon className=" h-14 w-14 cursor-pointer rounded-full transition-all active:scale-90">
              <PlusIcon className=" h-10 w-10 stroke-[1.5px] " />
            </ThemeIcon>
          </Link>
          <Link
            href="/auth/login"
            className="relative flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <Tooltip
              label="通知"
              color="grape"
              withArrow
              arrowPosition="center"
              offset={14}
            >
              <BellIcon className="h-10 w-10 cursor-pointer stroke-black stroke-[0.5px] transition-all active:scale-90" />
            </Tooltip>
          </Link>
          {user?.isAnonymous ? (
            <Link
              href="/auth/login"
              className="relative flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100"
            >
              <Tooltip
                label="ログイン"
                color="grape"
                withArrow
                arrowPosition="center"
                offset={14}
              >
                <UserCircleIcon className="h-10 w-10 cursor-pointer rounded-full  text-center text-gray-500 transition-all active:scale-90" />
              </Tooltip>
            </Link>
          ) : (
            <Link
              href={`/user/${user?.uid}`}
              className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100"
            >
              <Indicator size={14} offset={5} withBorder color="teal">
                <Avatar
                  src={user?.photoURL}
                  color={user?.photoURL ? "transparent" : "grape"}
                  variant="light"
                  className="h-10 w-10 cursor-pointer rounded-full  text-center text-gray-500 transition-all active:scale-90"
                />
              </Indicator>
            </Link>
          )}
        </Flex>
      </ScrollArea>
      <div className="mt-10 hidden h-10 w-full  pb-16 md:block" />
    </div>
  );
};
