import { useCallback, useRef, useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { getWsClient } from "src/libs/client/ws";
import { useWsClientState } from "src/store/global/globalStore";
import { getToken } from "src/utils/client/getToken";

export const useSubscriptionsHandler = () => {
  const onNotification = useNotificationState((state) => state.onShow);
  const [isWsError, setIsWsError] = useState(false);
  const [reConnectionCount, setReConnectionCount] = useState(0);
  const [wsClient, setWsClient, isSocketError, setIsSocketError] =
    useWsClientState((state) => [
      state.wsClient,
      state.setWsClient,
      state.isWsError,
      state.setIsWsError,
    ]);

  const errorTimeout = useRef<NodeJS.Timeout | null>(null);

  // エラーの際の自動再接続
  const handleAutoReconnect = useCallback(async () => {
    const token = await getToken();

    if (!token) return;

    const newClient = getWsClient({
      token,
      onConnected: () => {
        if (errorTimeout.current) clearTimeout(errorTimeout.current);
        setIsSocketError(false);
        onNotification({
          title: "リアルタイムで更新中です。",
          message: "自動で最新のコメントを読み込みます",
          type: "success",
        });
      },
      onError: () => {
        if (errorTimeout.current) clearTimeout(errorTimeout.current);
        errorTimeout.current = setTimeout(() => {
          onNotification({
            title: "リアルタイム接続できませんでした。",
            message: "右下のボタンを押すと、最新のコメントを読み込めます",
            type: "error",
          });
          setIsSocketError(true);
        }, 10000);
      },
    });

    setWsClient(newClient);
    setIsWsError(false);
    setReConnectionCount((prev) => prev + 1);
  }, [onNotification, setIsSocketError, setWsClient]);

  // エラー時のハンドラー
  const handlerError = useCallback(() => {
    if (errorTimeout.current) clearTimeout(errorTimeout.current);
    errorTimeout.current = setTimeout(() => {
      if (isWsError) return;
      onNotification({
        title: "リアルタイム接続できませんでした。",
        message: "右下のボタンを押すと、最新のコメントを読み込めます",
        type: "error",
      });
      setIsWsError(true);
    }, 10000);
  }, [isWsError, onNotification]);

  // クリーンアップ関数
  const cleanup = useCallback(() => {
    wsClient?.dispose();
    if (errorTimeout.current) {
      clearTimeout(errorTimeout.current);
      errorTimeout.current = null;
    }
  }, [wsClient]);

  return {
    handleAutoReconnect,
    handlerError,
    isWsError,
    reConnectionCount,
    wsClient,
    isSocketError,
    errorTimeout,
    cleanup,
  };
};
