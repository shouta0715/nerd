import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";

type Props = {
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
};
export const LiveComment: FC<Props> = ({ setIsChat }) => (
  <div className="flex w-full flex-1 animate-fadeUp flex-col items-center justify-center p-6">
    <p className="text-lg font-bold md:text-xl">
      終了までお待ち下さい。終了後にコメントを投稿できます。
    </p>
    <Button
      className="mt-4 bg-indigo-500 p-2 font-bold text-white"
      onClick={() => setIsChat(true)}
      size="sm"
    >
      チャットに戻る
    </Button>
  </div>
);
