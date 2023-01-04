import React, { FC } from "react";
import { Autocomplete, ThemeIcon } from "@mantine/core";
import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons";

export const Header: FC = () => (
  <header className="fixed top-0 h-16  w-full border-b border-l-0 border-t-0 border-r-0 border-solid border-gray-200   shadow-sm md:border-none">
    <div className="container mx-auto flex h-full items-center justify-center border-b border-l-0 border-t-0 border-r-0 border-none border-gray-200 md:border-solid">
      <form className="flex h-full items-center justify-center space-x-4">
        <Autocomplete
          className="w-64 text-2xl"
          placeholder="キーワードで検索"
          data={["test"]}
          size="xs"
          radius="xl"
          icon={<IconSearch size={14} />}
        />
        <ThemeIcon
          color="green"
          variant="light"
          className="cursor-pointer active:scale-90"
        >
          <IconAdjustmentsHorizontal size={20} />
        </ThemeIcon>
      </form>
    </div>
  </header>
);
