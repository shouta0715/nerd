/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { ExecutionResult } from "graphql";
import { SUBSCRIPTION_COMMENTS } from "../../graphql/comments/commentQuery";
import { Comment } from "../../types/commentType";
import { useGlobalStore } from "../../store/global/globalStore";

interface Payload extends ExecutionResult {
  data: {
    comments: Comment[];
  };
}

export const useSubscriptionComment = (postId: string) => {
  const queryClient = useQueryClient();
  const wsClient = useGlobalStore((state) => state.wsClient);
  useEffect(() => {
    if (wsClient === null) return;
    const unSubscription = wsClient.subscribe(
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

    // eslint-disable-next-line consistent-return
    return () => {
      unSubscription();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wsClient]);
};
