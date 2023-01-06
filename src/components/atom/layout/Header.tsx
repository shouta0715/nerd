import React, { FC } from "react";
import { Autocomplete, ThemeIcon } from "@mantine/core";
import { IconAdjustments, IconSearch } from "@tabler/icons";
import { toast } from "react-toastify";

export const Header: FC = () => (
  <header className="md:shadow-non fixed top-0  z-50 h-16 w-full border-b border-l-0 border-t-0 border-r-0 border-solid  border-gray-200  md:border-none">
    <div className="container mx-auto h-full bg-white">
      <div className=" flex h-full items-center justify-center border-b border-l-0 border-t-0 border-r-0 border-none border-gray-200  shadow-sm md:ml-[12%] md:border-solid lg:mr-[33.3333%]">
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
            onClick={() => {
              toast.error("エラーが発生しました");
            }}
            color="green"
            variant="light"
            className="cursor-pointer transition-transform active:scale-90"
            size={36}
            radius="md"
          >
            <IconAdjustments size={24} />
          </ThemeIcon>
        </form>
      </div>
    </div>
  </header>
);
