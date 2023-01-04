import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Posts } from "../../generated/graphql";
import { GET_POSTS } from "../../graphql/posts/postQuery";

const fetchPosts = async (): Promise<Posts> => {
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const data = await request<Posts>(endpoint, GET_POSTS);

  return data;
};

export const useQueryPosts = () =>
  useQuery<Posts, Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
