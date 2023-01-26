import {
  Categories_Enum,
  GetInvitesByCategoryQuery,
  useGetInvitesByCategoryQuery,
} from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryInvitesByCategory = (category: Categories_Enum) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  return useGetInvitesByCategoryQuery<GetInvitesByCategoryQuery, Error>(
    client,
    {
      category,
    },
    {
      onError: (error: Error) => {
        console.log(error);
      },
      enabled: isClient,
    }
  );
};
