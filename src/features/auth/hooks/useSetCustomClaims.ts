/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient } from "@tanstack/react-query";
import { User } from "firebase/auth";
import { useCallback, useState } from "react";
import { ResData } from "src/features/auth/types";
import { auth } from "src/libs/firebase";
import { client } from "src/libs/graphqlClient";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useSetCustomClaims = () => {
  const setUser = useUserState((state) => state.setUser);
  const queryClient = useQueryClient();
  const setAuthLoading = useGlobalState((state) => state.setAuthLoading);
  const [_, setAuthError] = useState<null>(null);

  const setCustomClaims = useCallback(
    async (user: User, isInitialLogin: boolean) => {
      setAuthLoading(true);
      const idTokenResult = await user.getIdTokenResult(true);

      const body = JSON.stringify({
        idToken: idTokenResult.token,
        refreshToken: user.refreshToken,
        isInitialLogin,
      });

      try {
        const res = await fetch("/api/auth/setCustomClaims", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        });

        if (res.status === 200 && res.ok) {
          const localUserName = localStorage.getItem("user_name");

          const token = await auth.currentUser?.getIdToken(true);

          try {
            const resUser: ResData = await res
              .json()
              .then((result) => result.data);

            if (!isInitialLogin && resUser.users_by_pk?.id !== user.uid) {
              throw new Error("Firebase: Error (auth/user-not-found).");
            }

            client.setHeader("Authorization", `Bearer ${token}`);

            const photo_url = isInitialLogin
              ? resUser.insert_users_one?.photo_url
              : resUser.users_by_pk?.photo_url ?? null;

            const initialLoginName = isInitialLogin
              ? resUser.insert_users_one?.user_name
              : resUser.users_by_pk?.user_name;

            const user_name = localUserName ?? initialLoginName ?? "匿名";

            setUser({
              id: user.uid,
              anonymous: user.isAnonymous,
              photo_url,
              user_name,
              provider_user_name: user.displayName ?? null,
              isDefaultPhoto: false,
            });
          } catch (error: any) {
            setAuthError(() => {
              throw new Error(
                `${error.message} resUser Error  API Error (403).${res.json()}`
              );
            });
          }

          if (!localUserName && user.displayName) {
            localStorage.setItem("user_name", user.displayName);
          }

          queryClient.invalidateQueries(["comments"]);
          queryClient.invalidateQueries(["replies"]);

          setAuthLoading(false);

          return;
        }

        const error = await res.json().then((err) => err);

        throw new Error(
          `${error.message} API Error /api/auth/setCustomClaims (403).`
        );
      } catch (error: any) {
        setAuthLoading(false);

        setAuthError(() => {
          throw new Error(`${error} API Error (403) ${idTokenResult.token}`);
        });
      }

      setAuthLoading(false);

      setAuthError(() => {
        throw new Error(`Firebase:Auth Error (403).${idTokenResult.token} `);
      });
    },
    [queryClient, setAuthLoading, setUser]
  );

  return { setCustomClaims };
};
