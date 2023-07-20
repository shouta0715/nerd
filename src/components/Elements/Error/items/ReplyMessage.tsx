import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNotificationState } from "src/components/Elements/Notification/store";

type Props = {
  children: ReactNode;
};

export const AutoErrorBoundary = ({ children }: Props) => {
  const { reset } = useQueryErrorResetBoundary();

  const onNotification = useNotificationState((state) => state.onShow);

  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary }) => {
        resetErrorBoundary();

        return null;
      }}
      onError={() => {
        onNotification({
          title: "データの取得に失敗しました。",
          message: "通信環境の良い場所で再度お試しください。",
          type: "error",
        });
        reset();
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
