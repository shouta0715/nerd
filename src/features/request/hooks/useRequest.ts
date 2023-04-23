import { useMutateRequest } from "src/features/request/api/useMutateRequest";

export const useRequest = () => {
  const insertRequest = useMutateRequest();
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmitHandler", insertRequest);
  };

  return {
    onSubmitHandler,
  };
};
