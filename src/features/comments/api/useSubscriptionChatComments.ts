/* eslint-disable no-useless-return */
import { useQueryClient } from "@tanstack/react-query";
import { ExecutionResult } from "graphql-ws";
import { useEffect } from "react";
import {
  GetChatCommentsQuery,
  useGetChatCommentsQuery,
} from "src/generated/graphql";
import { SUBSCRIPTION_CHAT_COMMENT } from "src/graphql/comment/commentQuery";
import { useGlobalState } from "src/store/global/globalStore";

type Args = {
  episode_id: string;
  category: string | string[] | undefined;
};

interface Payload extends ExecutionResult {
  data: {
    chat_comments: GetChatCommentsQuery["chat_comments"];
  };
}

export const useSubscriptionChatComments = ({ episode_id, category }: Args) => {
  const queryClient = useQueryClient();
  const wsClient = useGlobalState((state) => state.wsClient);
  const isWSClient = useGlobalState((state) => state.isWsClient);

  useEffect(() => {
    if (wsClient === null || category !== "live" || !episode_id || !isWSClient)
      return;

    const unSubscriptions = wsClient.subscribe(
      {
        query: SUBSCRIPTION_CHAT_COMMENT,
        variables: {
          episode_id,
        },
      },
      {
        next: (payload: Payload) => {
          const prevDataQueryKey = useGetChatCommentsQuery.getKey({
            episode_id,
          });
          const prevData =
            queryClient.getQueryData<GetChatCommentsQuery>(prevDataQueryKey);

          if (prevData) {
            const { chat_comments } = prevData;
            const { chat_comments: newChatComments } = payload.data;

            if (chat_comments.length !== newChatComments.length) {
              queryClient.setQueryData(prevDataQueryKey, {
                chat_comments: newChatComments,
              });
            }
          }
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log("complete");
        },
      }
    );

    // eslint-disable-next-line consistent-return
    return () => {
      unSubscriptions();
    };
  }, [category, episode_id, queryClient, wsClient]);
};
