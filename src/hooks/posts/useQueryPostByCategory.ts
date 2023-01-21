import { toast } from "react-toastify";
import {
  Categories_Enum,
  GetPostByCategoryQuery,
  useGetPostByCategoryQuery,
} from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPostsByCategory = (category: Categories_Enum) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  const { data, isLoading } = useGetPostByCategoryQuery<
    GetPostByCategoryQuery,
    Error
  >(
    client,
    {
      category,
    },
    {
      onError: (error: Error) => {
        toast.error(error.message);
      },
      enabled: isClient,
    }
  );

  return { posts: data?.posts, isLoading };
};
