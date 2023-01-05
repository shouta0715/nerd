import { GetPostsQuery, useGetPostsQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPosts = () => {
  const client = useGlobalStore((state) => state.client);
  console.log(client);

  const { data } = useGetPostsQuery<GetPostsQuery, Error>(
    client,
    {},
    {
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  console.log(data);

  return { data };
};
