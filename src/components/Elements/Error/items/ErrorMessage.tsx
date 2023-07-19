import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import { FallbackProps } from "react-error-boundary";
import { Button } from "src/components/Elements/Button";
import { useNotificationState } from "src/components/Elements/Notification/store";

export const ErrorMessage = ({ resetErrorBoundary }: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const onNotification = useNotificationState((state) => state.onShow);

  React.useEffect(() => {
    onNotification({
      title: "データの取得に失敗しました。",
      message: "通信環境の良い場所で再度お試しください。",
      type: "error",
    });
  }, [onNotification]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
        データの取得に失敗しました。
      </p>
      <Button
        onClick={() => {
          resetErrorBoundary();
          reset();
        }}
        size="md"
        theme="primary"
      >
        データを再取得する
      </Button>
    </div>
  );
};
