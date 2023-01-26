import { GetInviteQuery, useGetInviteQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPost = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  const { data, isLoading } = useGetInviteQuery<GetInviteQuery, Error>(
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

  return {
    invite: data?.invites_by_pk,
    isLoading,
  };
};
