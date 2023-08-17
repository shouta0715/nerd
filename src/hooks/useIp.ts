import { useQueryClient } from "@tanstack/react-query";
import { useUserState } from "src/store/user/userState";

const getIp = async () => {
  const data = await fetch("/api/ip").then((res) => res.json());

  if (!data) return null;

  return data.ip;
};

export const useIp = () => {
  const queryClient = useQueryClient();
  const user = useUserState((state) => state.user);

  const getIpAddress = async (): Promise<string | null> => {
    if (!user) return null;

    const data = queryClient.fetchQuery({
      queryKey: ["ip", { user_id: user?.id }],
      queryFn: getIp,
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60 * 60 * 24,
    });

    return data;
  };

  return {
    getIpAddress,
  };
};
