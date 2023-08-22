import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requestInsertDocument } from "src/documents/request";
import {
  DeleteRequestDocument,
  DeleteRequestMutation,
  DeleteRequestMutationVariables,
  GetRequestByStatusQuery,
  GetRequestsQuery,
  InsertRequestMutation,
  InsertRequestMutationVariables,
  Status_Enum,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";
import { Error } from "src/libs/error";
import { useUserState } from "src/store/user/userState";

const getInitialPagePrevDataKey = (all: boolean, user_id: string) => [
  "request",
  {
    page: 1,
    status: all ? "all" : Status_Enum.Pending,
    user_id,
  },
];

export const useMutateRequest = () => {
  const queryClient = useQueryClient();
  const user = useUserState((state) => state.user);

  const insertRequest = useMutation<
    InsertRequestMutation,
    Error,
    InsertRequestMutationVariables
  >({
    mutationFn: (object) => client.request(requestInsertDocument, object),
    onSuccess: (data) => {
      if (!data.insert_request_works_one || !user?.id) return;
      const [allPrevData, pendingPrevData] = [
        queryClient.getQueryData<GetRequestsQuery>(
          getInitialPagePrevDataKey(true, user.id)
        ),
        queryClient.getQueryData<GetRequestByStatusQuery>(
          getInitialPagePrevDataKey(false, user.id)
        ),
      ];

      if (allPrevData) {
        const count = allPrevData.request_works_aggregate.aggregate?.count;

        queryClient.setQueryData<GetRequestsQuery>(
          getInitialPagePrevDataKey(true, user.id),
          {
            request_works: [
              data.insert_request_works_one,
              ...allPrevData.request_works,
            ],
            request_works_aggregate: {
              aggregate: {
                count: count !== undefined && count >= 0 ? count + 1 : 0,
              },
            },
          }
        );
      }

      if (!pendingPrevData) return;

      const count = pendingPrevData.request_works_aggregate.aggregate?.count;
      queryClient.setQueryData<GetRequestByStatusQuery>(
        getInitialPagePrevDataKey(false, user.id),
        {
          request_works: [
            data.insert_request_works_one,
            ...pendingPrevData.request_works,
          ],
          request_works_aggregate: {
            aggregate: {
              count: count !== undefined && count >= 0 ? count + 1 : 0,
            },
          },
        }
      );
    },
  });

  const deleteRequest = useMutation<
    DeleteRequestMutation,
    Error,
    DeleteRequestMutationVariables
  >({
    mutationFn: (id) => client.request(DeleteRequestDocument, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["request"],
      });
    },
  });

  return {
    insertRequest,
    deleteRequest,
  };
};
