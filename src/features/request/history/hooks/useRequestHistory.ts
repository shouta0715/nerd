import { useRouter } from "next/router";
import { useQueryRequest } from "src/features/request/history/api/useQueryRequest";
import { parseStatus } from "src/features/request/history/utils";
import { useUserState } from "src/store/user/userState";

export const useRequestHistory = () => {
  const { query, push } = useRouter();
  const { status, page } = query;
  const user = useUserState((state) => state.user);
  const { isPending, data, isFetching } = useQueryRequest({
    page: page ? Number(page) : undefined,
    status: parseStatus(status),
    user_id: user?.id ?? "",
  });

  return {
    isPending,
    data,
    push,
    query,
    isFetching,
  };
};
