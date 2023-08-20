import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { useNotificationState } from "src/components/Notification/store";
import { useMutateRequest } from "src/features/request/api/useMutateRequest";
import { Request, RequestSchema } from "src/features/request/types";

export const useRequestForm = () => {
  const { mutateAsync, isPending } = useMutateRequest();
  const onShow = useNotificationState((state) => state.onShow);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Request>({
    resolver: valibotResolver(RequestSchema),
  });

  const onSubmitHandler = handleSubmit(async (data) => {
    try {
      const { work_description, work_title, work_url } = data;

      await mutateAsync({
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
      reset();
    } catch (error) {
      onShow({
        title: "送信できませんでした。",
        type: "error",
        message: "時間をおいて再度リクエストをお願いします。",
      });
    }
  });

  return {
    onSubmitHandler,
    register,
    errors,
    isPending,
  };
};
