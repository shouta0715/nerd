import { useGetUserQuery } from "../../generated/graphql";
import { useGlobalState } from "../../store/global/globalStore";

export const useUserQuery = (id: string) => {
  const client = useGlobalState((state) => state.client);
  const isClient = useGlobalState((state) => state.isClient);

  return useGetUserQuery(
    client,
    {
      id,
    },
    {
      onError: () => {
        console.log("Error fetching user");
      },
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: isClient && !!id,
    }
  );
};
