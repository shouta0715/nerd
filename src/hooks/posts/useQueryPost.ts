import { GetPostQuery, useGetPostQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPost = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const { data } = useGetPostQuery<GetPostQuery, Error>(
    client,
    {
      id,
    },
    {
      enabled: !!id,
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  console.log(data);

  return { post: data?.posts_by_pk };
};
