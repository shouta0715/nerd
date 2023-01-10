import { toast } from "react-toastify";
import { GetPostsQuery, useGetPostsQuery } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useQueryPosts = () => {
  const client = useGlobalStore((state) => state.client);

  const { data, isLoading } = useGetPostsQuery<GetPostsQuery, Error>(
    client,
    {},
    {
      onError: (error: Error) => {
        toast.error(error.message);
      },
    }
  );

  return { posts: data?.posts, isLoading };
};
