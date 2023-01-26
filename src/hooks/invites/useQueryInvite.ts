import { GetInviteQuery, useGetInviteQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryInvite = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  return useGetInviteQuery<GetInviteQuery, Error>(
    client,
    {
      id,
    },
    {
      onError: (error: Error) => {
        console.log(error);
      },
      enabled: isClient && !!id,
      staleTime: 1000 * 60 * 5,
    }
  );
};
