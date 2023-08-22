import { useNotificationState } from "src/components/Notification/store";
import { useMutateRequest } from "src/features/request/common/api/useMutateRequest";

export const useDeleteRequest = (id: number) => {
  const {
    deleteRequest: { mutateAsync: deleteRequest, isPending },
  } = useMutateRequest();
  const onNotification = useNotificationState((state) => state.onShow);

  const onDeleteRequest = async () => {
    try {
      await deleteRequest({ id });

      onNotification({
        title: "リクエストを削除しました。",
        type: "success",
      });
    } catch (error) {
      onNotification({
        title: "リクエストを削除できませんでした。",
        type: "error",
        message: "時間をおいて再度お願いします。",
      });
    }
  };

  return {
    onDeleteRequest,
    isPending,
  };
};
