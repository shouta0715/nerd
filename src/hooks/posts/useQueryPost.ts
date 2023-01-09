import { GetPostQuery, useGetPostQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPost = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  const { data, isLoading, isError } = useGetPostQuery<GetPostQuery, Error>(
    client,
    {
      id,
    },
    {
      onError: (error: Error) => {
        console.log(error);
      },
      suspense: false,
      enabled: isClient,
      staleTime: 1000 * 60 * 5,
    }
  );

  return {
    post: data?.posts_by_pk,
    isPostLoading: isLoading,
    isPostError: isError,
  };
};
