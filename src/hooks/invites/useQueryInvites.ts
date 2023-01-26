import { toast } from "react-toastify";
import { GetInvitesQuery, useGetInvitesQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPosts = () => {
  const client = useGlobalStore((state) => state.client);

  const { data } = useGetInvitesQuery<GetInvitesQuery, Error>(
    client,
    {},
    {
      onError: (error: Error) => {
        toast.error(error.message);
      },
      suspense: true,
    }
  );

  return { invites: data?.invites };
};
