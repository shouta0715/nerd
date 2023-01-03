import React, { FC } from "react";
import {
  Avatar,
  Burger,
  Flex,
  Footer as MFooter,
  ThemeIcon,
} from "@mantine/core";
import { BellIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useGlobalStore } from "../../store/global/globalStore";
import { Drawer } from "./Drawer";

export const Footer: FC = () => {
  const isOpenBurger = useGlobalStore((state) => state.isOpenBurger);
  const changeIsOpenBurger = useGlobalStore(
    (state) => state.changeIsOpenBurger
  );

  return (
    <MFooter className="md:hidden" height={76}>
      <Flex justify="space-around" align="center" className="h-full w-full">
        <Burger opened={isOpenBurger} size={36} onClick={changeIsOpenBurger} />
        <HomeIcon className="h-10 w-10 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
        <ThemeIcon className=" h-14 w-14 rounded-full transition-all active:scale-90">
          <PlusIcon className="h-10 w-10 stroke-[1.5px]" />
        </ThemeIcon>
        <BellIcon className="h-10 w-10 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
        {true ? (
          <UserCircleIcon className="h-10 w-10 cursor-pointer rounded-full text-gray-500 transition-all active:scale-90" />
        ) : (
          <Avatar />
        )}
      </Flex>
      <Drawer />
    </MFooter>
  );
};
