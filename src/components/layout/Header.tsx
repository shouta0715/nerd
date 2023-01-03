import React, { FC } from "react";
import { Autocomplete, Button } from "@mantine/core";

export const Header: FC = () => (
  <header className="fixed top-0 h-16  w-full border-b border-l-0 border-t-0 border-r-0 border-solid border-gray-200   shadow-sm md:border-none">
    <div className="container mx-auto h-full border-b border-l-0 border-t-0 border-r-0 border-none border-gray-200 md:border-solid">
      <form className="flex h-full items-center justify-center space-x-4">
        <Autocomplete
          className="w-64"
          placeholder="検索する"
          data={["test"]}
          size="md"
        />
        <Button>検索</Button>
      </form>
    </div>
  </header>
);
