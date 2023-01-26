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

export const useSubscriptionComment = (invite_id: string) => {
  const queryClient = useQueryClient();
  const wsClient = useGlobalStore((state) => state.wsClient);
  useEffect(() => {
    if (wsClient === null) return;
    const unSubscription = wsClient.subscribe(
      {
        query: SUBSCRIPTION_COMMENTS,
        variables: {
          invite_id,
        },
      },
      {
        next: (payload: Payload) => {
          queryClient.setQueryData<Comment[]>(
            [invite_id, "comments"],
            payload.data?.comments
          );
        },
        error: (error: Error) => console.log(error),
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
