import { useQueryClient } from "@tanstack/react-query";
import {
  GetInviteQuery,
  GetInvitesQuery,
  useGetInviteQuery,
  useGetInvitesQuery,
} from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryInvite = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);
  const queryClient = useQueryClient();

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
      placeholderData: () => ({
        invites_by_pk: queryClient
          .getQueryData<GetInvitesQuery>(useGetInvitesQuery.getKey({}))
          ?.invites.find((invite) => invite.id === id),
      }),
    }
  );
};
