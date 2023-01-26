import { toast } from "react-toastify";
import {
  Categories_Enum,
  GetInvitesByCategoryQuery,
  useGetInvitesByCategoryQuery,
} from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryInvitesByCategory = (category: Categories_Enum) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  const { data, isLoading } = useGetInvitesByCategoryQuery<
    GetInvitesByCategoryQuery,
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

  return { invite: data?.invites, isLoading };
};
