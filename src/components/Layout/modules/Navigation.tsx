import { Input } from "@mantine/core";
import { FC } from "react";

export const Navigation: FC = () => (
  <div className="px-6">
    <form className="flex w-full space-x-4">
      <Input
        className="flex-1"
        radius="md"
        placeholder="タイトルで検索"
        classNames={{
          input: "text-base",
        }}
      />
    </form>
  </div>
);
