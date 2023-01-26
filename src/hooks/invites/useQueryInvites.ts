import { toast } from "react-toastify";
import { GetInvitesQuery, useGetInvitesQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryInvites = () => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  const { data, isLoading } = useGetInvitesQuery<GetInvitesQuery, Error>(
    client,
    {},
    {
      onError: (error: Error) => {
        toast.error(error.message);
      },
      enabled: isClient,
    }
  );

  return { invites: data?.invites, isLoading };
};
