import React, { FC } from "react";
import { Burger, Flex, ThemeIcon } from "@mantine/core";
import { BellIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { IconSearch } from "@tabler/icons";
import { useGlobalStore } from "../../../store/global/globalStore";
import { Drawer } from "./Drawer";

export const Footer: FC = () => {
  const isOpenBurger = useGlobalStore((state) => state.isOpenBurger);
  const changeIsOpenBurger = useGlobalStore(
    (state) => state.changeIsOpenBurger
  );

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
        <IconSearch className="h-6 w-6 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
        <BellIcon className="h-6 w-6 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
      </Flex>
      <Drawer />
    </footer>
  );
};
