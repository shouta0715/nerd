import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { useMutateRequest } from "src/features/request/api/useMutateRequest";
import { Request, RequestSchema } from "src/features/request/types";

export const useRequest = () => {
  const insertRequest = useMutateRequest();
  const onShow = useNotificationState((state) => state.onShow);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Request>({
    resolver: zodResolver(RequestSchema),
  });

  const onSubmitHandler = handleSubmit(async (data) => {
    try {
      const { work_description, work_title, work_url } = data;

      await insertRequest.mutateAsync({
        object: {
          work_title,
          detail: !work_description?.trim() ? null : work_description,
          official_url: !work_url?.trim() ? null : work_url,
        },
      });

      onShow({
        title: "リクエストありがとうございます。",
        type: "success",
        message: "リクエストを送信しました",
      });
    } catch (error) {
      onShow({
        title:
          "エラーが発生しました。時間をおいて再度リクエストをお願いします。",
        type: "error",
        message: "エラー",
      });
    } finally {
      reset();
    }
  });

  return {
    onSubmitHandler,
    register,
    errors,
    ...insertRequest,
  };
};
