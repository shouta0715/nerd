import { toast } from "react-toastify";
import { useGetCommentsQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryComments = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const { data } = useGetCommentsQuery(
    client,
    {
      post_id: id,
    },
    {
      enabled: !!id,
      onError: (error: Error) => {
        toast.error(error.message);
      },
    }
  );

  return {
    comments: data?.comments,
  };
};
