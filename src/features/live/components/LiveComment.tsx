import { useRouter } from "next/router";
import React from "react";
import { Button } from "src/components/Elements/Button";

export const LiveComment = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-1 animate-fadeUp flex-col items-center justify-center p-6">
      <p className="text-dimmed">
        終了までお待ち下さい。終了後にコメントを投稿できます。
      </p>
      <Button
        className="mt-4"
        onClick={() =>
          router.replace({
            query: {
              ...router.query,
              mode: "chat",
            },
          })
        }
        size="md"
        theme="primary"
      >
        チャットに戻る
      </Button>
    </div>
  );
};
