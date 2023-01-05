import { useQuery } from "@tanstack/react-query";
// import { request } from "graphql-request";
// import { Posts } from "../../generated/graphql";
// import { GET_POSTS } from "../../graphql/posts/postQuery";
// import { useGlobalStore } from "../../store/global/globalStore";

const fetchPosts = async () => {
  // const request = useGlobalStore((state) => state.client);
  // const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;
  // const data = await request<Posts>(endpoint, GET_POSTS);
  console.log("fetchPosts");

  return null;
};

export const useQueryPosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
