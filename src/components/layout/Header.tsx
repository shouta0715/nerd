import React, { FC } from "react";
import { Autocomplete, ThemeIcon } from "@mantine/core";
import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons";

export const Header: FC = () => (
  <header className="md:shadow-non fixed top-0  h-16 w-full border-b border-l-0 border-t-0 border-r-0 border-solid  border-gray-200  md:border-none">
    <div className="e container mx-auto h-full ">
      <div className=" flex h-full items-center justify-center border-b border-l-0 border-t-0 border-r-0 border-none border-gray-200 shadow-sm md:ml-[10%] md:border-solid lg:mr-[33.3333%]">
        <form className="flex h-full items-center justify-center space-x-4">
          <Autocomplete
            className=" w-72 text-2xl"
            color="green"
            placeholder="キーワードで検索"
            data={["test"]}
            size="md"
            radius="xl"
            icon={<IconSearch size={20} />}
          />
          <ThemeIcon
            color="green"
            variant="light"
            className="cursor-pointer transition-transform active:scale-90"
            size={36}
            radius="md"
          >
            <IconAdjustmentsHorizontal size={24} />
          </ThemeIcon>
        </form>
      </div>
    </div>
  </header>
);
