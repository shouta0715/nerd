import { useQueryClient } from "@tanstack/react-query";
import { User } from "firebase/auth";
import { ResData } from "src/features/auth/types";
import { auth } from "src/libs/firebase";
import { client } from "src/libs/graphqlClient";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useSetCustomClaims = () => {
  const setUser = useUserState((state) => state.setUser);
  const setAuthLoading = useGlobalState((state) => state.setAuthLoading);

  const queryClient = useQueryClient();

  const setCustomClaims = async (user: User, isInitialLogin: boolean) => {
    setAuthLoading(true);
    const idTokenResult = await user.getIdTokenResult(true);

    const res = await fetch("/api/auth/setCustomClaims", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: idTokenResult.token,
        refreshToken: user.refreshToken,
        isInitialLogin,
      }),
    });

    if (res.status === 200 && res.ok) {
      const localUserName = localStorage.getItem("user_name");
      const token = await auth.currentUser?.getIdToken(true);

      const resUser: ResData = await res.json().then((data) => data.data);

      if (!isInitialLogin && resUser.users_by_pk?.id !== user.uid) {
        throw new Error("Firebase: Error (auth/user-not-found).");
      }

      client.setHeader("Authorization", `Bearer ${token}`);

      setUser({
        id: user.uid,
        anonymous: user.isAnonymous,
        photo_url: isInitialLogin
          ? resUser.insert_users_one?.photo_url ?? null
          : resUser.users_by_pk?.photo_url ?? null,
        user_name:
          localUserName ?? isInitialLogin
            ? resUser.insert_users_one?.user_name ?? "匿名"
            : resUser.users_by_pk?.user_name ?? "匿名",
        provider_user_name: user.displayName ?? null,
      });

      if (!localUserName && user.displayName) {
        localStorage.setItem("user_name", user.displayName);
      }
      if (!user.isAnonymous) {
        queryClient.invalidateQueries(["comments"]);
        queryClient.invalidateQueries(["replies"]);
      }
      setAuthLoading(false);

      return;
    }

    throw new Error("Firebase: Error (auth/popup-closed-by-user).");
  };

  return { setCustomClaims };
};
