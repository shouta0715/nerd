/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "graphql-ws";
import { useEffect } from "react";
import { ExecutionResult } from "graphql";
import { SUBSCRIPTION_COMMENTS } from "../../graphql/comments/commentQuery";
import { Comment } from "../../types/commentType";

interface Payload extends ExecutionResult {
  data: {
    comments: Comment[];
  };
}

export const useSubscriptionComment = (postId: string) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const client = createClient({
      url: "wss://anime-app-plus.hasura.app/v1/graphql",
      connectionParams: () => ({
        headers: {
          "x-hasura-admin-secret": "L5ssVV2nfL9FXd3",
        },
      }),
    });

    const unSubscription = client.subscribe(
      {
        query: SUBSCRIPTION_COMMENTS,
        variables: {
          post_id: "4c436ad6-0ce0-4a24-8f63-f352f916c64f",
        },
      },
      {
        next: (payload: Payload) => {
          queryClient.setQueryData<Comment[]>(
            [postId, "comments"],
            payload.data?.comments
          );
        },
        error: (error) => console.log(error),
        complete: () => console.log("complete"),
      }
    );

    return () => {
      unSubscription();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
