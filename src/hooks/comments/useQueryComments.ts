import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GET_COMMENTS } from "../../graphql/comments/commentQuery";
import { useGlobalStore } from "../../store/global/globalStore";
import { Comment } from "../../types/commentType";

const fetchComments = async (
  client: GraphQLClient,
  id: string
): Promise<Comment[]> => {
  const { comments } = await client.request(GET_COMMENTS, { invite_id: id });

  return comments;
};

export const useQueryComments = (id: string) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);

  return useQuery<Comment[], Error>({
    queryKey: [id, "comments"],
    queryFn: () => fetchComments(client, id),
    onError: (error) => console.log(error),
    enabled: !!isClient && !!id,
  });
};
