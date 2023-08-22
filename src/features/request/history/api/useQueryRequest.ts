import { useQuery } from "@tanstack/react-query";
import {
  requestGetByStatusDocument,
  requestGetDocument,
} from "src/documents/request";
import {
  GetRequestByStatusQuery,
  GetRequestsQuery,
  Status_Enum,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";
import { useUserState } from "src/store/user/userState";

type Props = {
  page?: number;
  status: Status_Enum | "all" | undefined;
  user_id: string;
};

type GetRequest = Props;

const getRequest = async ({
  status,
  page,
  user_id,
}: GetRequest): Promise<GetRequestsQuery | GetRequestByStatusQuery> => {
  const isStatus = status !== "all" && status !== undefined;
  const offset = ((page ?? 1) - 1) * 10;

  const commonVariables = {
    user_id,
    limit: 10,
    offset,
  };

  const data = isStatus
    ? client.request(requestGetByStatusDocument, {
        ...commonVariables,
        status,
      })
    : client.request(requestGetDocument, {
        ...commonVariables,
      });

  return data;
};

export const useQueryRequest = ({ page, status }: Props) => {
  const user = useUserState((state) => state.user);

  return useQuery({
    queryKey: [
      "request",
      {
        page,
        status: status ?? "all",
        user_id: user?.id ?? "",
      },
    ],
    queryFn: () =>
      getRequest({
        page,
        status,
        user_id: user?.id ?? "",
      }),

    staleTime: 1000 * 60 * 30,
    enabled: !!user && !!user?.id && !!status && !!page,
  });
};
