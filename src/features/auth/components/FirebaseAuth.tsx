/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-self-assign */

import { useQueryClient } from "@tanstack/react-query";
import { signInAnonymously } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { ResData } from "src/features/auth/types";
import { auth } from "src/libs/firebase";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;

type Props = {
  children: React.ReactNode;
};

export const FirebaseAuth: FC<Props> = ({ children }) => {
  const setUser = useUserState((state) => state.setUser);
  const queryClient = useQueryClient();
  const setAuthLoading = useGlobalState((state) => state.setAuthLoading);
  const [_, setAuthError] = useState<null>(null);
  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setAuthLoading(true);

        const idTokenResult = await user.getIdTokenResult(true);
        const isHasClaims = idTokenResult.claims[TOKEN_KEY];
        const isInitialLogin = !isHasClaims;

        const body = JSON.stringify({
          idToken: idTokenResult.token,
          refreshToken: user.refreshToken,
          isInitialLogin: !isHasClaims,
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
            const newestToken = await auth.currentUser?.getIdToken(true);
            const prevName = localStorage.getItem("user_name");

            if (!newestToken) throw new Error("newestToken is not found");

            const { users_by_pk, insert_users_one }: ResData = await res
              .json()
              .then((r) => r.data);

            if (!isHasClaims && users_by_pk?.id !== user.uid)
              throw new Error("user id is not match");

            const photo_url = isInitialLogin
              ? insert_users_one?.photo_url
              : users_by_pk?.photo_url;

            const initialLoginName = isInitialLogin
              ? insert_users_one?.user_name
              : users_by_pk?.user_name;

            const user_name = prevName ?? initialLoginName ?? "匿名";

            setUser({
              id: user.uid,
              anonymous: user.isAnonymous,
              photo_url: photo_url ?? null,
              user_name,
              provider_user_name: user.displayName ?? null,
              isDefaultPhoto: false,
            });

            if (!prevName && user.displayName) {
              localStorage.setItem("user_name", user.displayName);
            }

            queryClient.invalidateQueries(["comments"]);
            queryClient.invalidateQueries(["replies"]);

            setAuthLoading(false);

            return;
          }

          const error = await res.text();
          setAuthError(() => {
            throw new Error(
              `${res.status} ${res.statusText} server error ${error}`
            );
          });
        } catch (error: any) {
          setAuthError(() => {
            throw new Error(`${error.message} setCustomClaims (403)`);
          });
        }
      } else {
        (async () => {
          await signInAnonymously(auth).then((result) => result.user);
        })();
      }
    });

    return () => {
      unSubUser();
    };
  }, [queryClient, setAuthLoading, setUser]);

  return <>{children}</>;
};
