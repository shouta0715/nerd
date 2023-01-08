import { GetPostQuery, useGetPostQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";
import { useUserStore } from "../../store/user/userState";

export const useQueryPost = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const user = useUserStore((state) => state.user);

  const { data, isLoading, isError } = useGetPostQuery<GetPostQuery, Error>(
    client,
    {
      id,
    },
    {
      enabled: !!user,
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  return {
    post: data?.posts_by_pk,
    isPostLoading: isLoading,
    isPostError: isError,
  };
};
