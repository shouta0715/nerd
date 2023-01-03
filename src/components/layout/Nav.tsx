import { BellIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Avatar, Burger, Flex, ScrollArea, ThemeIcon } from "@mantine/core";
import React, { FC } from "react";
import { useGlobalStore } from "../../store/global/globalStore";

export const Nav: FC = () => {
  const isOpenBurger = useGlobalStore((state) => state.isOpenBurger);
  const changeIsOpenBurger = useGlobalStore(
    (state) => state.changeIsOpenBurger
  );

  return (
    <div className="z-50 hidden h-screen w-32 flex-col items-center justify-around border-r border-l-0 border-t-0 border-b-0 border-solid border-gray-200 bg-white pt-16 md:flex">
      <div className="mb-10 hidden  md:block">ICON</div>
      <ScrollArea className="w-full">
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="h-full w-full space-y-16"
        >
          <Burger
            opened={isOpenBurger}
            size={36}
            onClick={changeIsOpenBurger}
          />
          <HomeIcon className="h-10 w-10  cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
          <ThemeIcon className="order-1 h-14 w-14 rounded-full transition-all active:scale-90">
            <PlusIcon className=" h-10 w-10 stroke-[1.5px]" />
          </ThemeIcon>
          <BellIcon className="h-10 w-10 cursor-pointer stroke-[0.5px] transition-all active:scale-90" />
          {true ? (
            <UserCircleIcon className="h-10 w-10 cursor-pointer rounded-full text-gray-500 transition-all active:scale-90" />
          ) : (
            <Avatar />
          )}
        </Flex>
      </ScrollArea>
      <div className="mt-10 hidden h-10 w-full  pb-16 md:block" />
    </div>
  );
};
