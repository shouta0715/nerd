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
      suspense: false,
      enabled: isClient,
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
