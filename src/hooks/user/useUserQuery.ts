import { useGetUserQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useUserQuery = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

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
