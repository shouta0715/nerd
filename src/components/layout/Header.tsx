import React, { FC } from "react";
import { Autocomplete, Button, Header as MHeader } from "@mantine/core";

export const Header: FC = () => (
  <MHeader
    height={64}
    className="mx-auto flex max-w-full items-center justify-center "
  >
    <form className="flex space-x-4">
      <Autocomplete className="w-64" placeholder="検索する" data={["test"]} />
      <Button>検索</Button>
    </form>
  </MHeader>
);
