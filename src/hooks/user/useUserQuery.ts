import { useGlobalState } from "../../store/global/globalStore";
import { useGetUserQuery } from "src/graphql/user/userQuery.generated";

export const useUserQuery = (id: string) => {
  const client = useGlobalState((state) => state.client);

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
      enabled: !!id,
    }
  );
};
