import React, { FC } from "react";
import { Avatar, Burger, Flex, Indicator, ThemeIcon } from "@mantine/core";
import { BellIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useGlobalStore } from "../../../store/global/globalStore";
import { Drawer } from "./Drawer";
import { useUserStore } from "../../../store/user/userState";

export const Footer: FC = () => {
  const isOpenBurger = useGlobalStore((state) => state.isOpenBurger);
  const changeIsOpenBurger = useGlobalStore(
    (state) => state.changeIsOpenBurger
  );
  const user = useUserStore((state) => state.user);

  return (
    <footer className="fixed bottom-0 z-50 h-14 w-full border-x-0 border-t border-b-0 border-solid border-gray-200  bg-white shadow-md md:hidden">
      <Flex justify="space-around" align="center" className="h-full w-full">
        <Burger opened={isOpenBurger} size={24} onClick={changeIsOpenBurger} />
        <Link className="h-6 w-6 " href="/">
          <HomeIcon className="h-6 w-6 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
        </Link>
        <ThemeIcon className=" h-10 w-10 rounded-full transition-all active:scale-90">
          <PlusIcon className="h-8 w-8 stroke-[1px]" />
        </ThemeIcon>
        <BellIcon className="h-6 w-6 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
        {user?.isAnonymous ? (
          <Link
            href="/auth/login"
            className="h-6 w-6 cursor-pointer rounded-full  transition-all active:scale-90"
          >
            <UserCircleIcon className="h-6 w-6  text-gray-500" />
          </Link>
        ) : (
          <Indicator size={14} offset={5} withBorder color="teal">
            <Avatar
              src={user?.photoURL}
              radius="xl"
              size="md"
              className="cursor-pointer"
            />
          </Indicator>
        )}
      </Flex>
      <Drawer />
    </footer>
  );
};
