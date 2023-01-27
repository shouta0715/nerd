import { GetInvitesQuery, useGetInvitesQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryInvites = () => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  return useGetInvitesQuery<GetInvitesQuery, Error>(
    client,
    {},
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error: Error) => {
        console.log(error);
      },
      enabled: isClient,
    }
  );
};
