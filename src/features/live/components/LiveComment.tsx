import { useRouter } from "next/router";
import React from "react";
import { Button } from "src/components/Elements/Button";

export const LiveComment = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-1 animate-fadeUp flex-col items-center justify-center p-6">
      <p className="text-lg font-bold md:text-xl">
        終了までお待ち下さい。終了後にコメントを投稿できます。
      </p>
      <Button
        className="mt-4 bg-indigo-500 p-2 font-bold text-white"
        onClick={() =>
          router.replace({
            query: {
              ...router.query,
              mode: "chat",
            },
          })
        }
        size="sm"
      >
        チャットに戻る
      </Button>
    </div>
  );
};
