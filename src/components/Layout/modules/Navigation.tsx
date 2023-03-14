import { FC } from "react";
import { Input } from "src/components/Elements/Input/Input";

export const Navigation: FC = () => (
  <div className="px-6">
    <form className="flex w-full space-x-4">
      <Input className="flex-1" placeholder="タイトルで検索" />
    </form>
  </div>
);
