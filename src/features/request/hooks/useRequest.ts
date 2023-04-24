import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutateRequest } from "src/features/request/api/useMutateRequest";
import { Request, RequestSchema } from "src/features/request/types";

export const useRequest = () => {
  const insertRequest = useMutateRequest();
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
    } catch (error) {
      //
    } finally {
      reset();
    }
  });

  return {
    onSubmitHandler,
    register,
    errors,
    isLoading: insertRequest.isLoading,
  };
};
