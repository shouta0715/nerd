import { useGetEpisodeLikesQuery } from "src/generated/graphql";
import { useGlobalStore } from "src/store/global/globalStore";
import { useUserStore } from "src/store/user/userState";

export const useQueryLike = (episodeId: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);
  const user = useUserStore((state) => state.user);

  return useGetEpisodeLikesQuery(
    client,
    {
      userId: user?.id as string,
      episodeId,
    },
    {
      enabled: isClient && !!user?.id && !!episodeId && !user?.anonymous,
      suspense: false,
    }
  );
};
