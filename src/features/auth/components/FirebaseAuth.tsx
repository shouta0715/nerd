/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-self-assign */

import { useQueryClient } from "@tanstack/react-query";
import { signInAnonymously } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { handleSetCustomClaims, useUser } from "src/features/auth/hooks";
import { ForbiddenError, UnauthorizedError } from "src/libs/error";
import { auth } from "src/libs/firebase";
import { client } from "src/libs/graphqlClient";
import { getWsClient } from "src/libs/wsClient";

import { useGlobalState, useWsClientState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;

export const FirebaseAuth = () => {
  const setUser = useUserState((state) => state.setUser);
  const queryClient = useQueryClient();
  const setAuthLoading = useGlobalState((state) => state.setAuthLoading);
  const [setWsClient, setIsWsError] = useWsClientState((state) => [
    state.setWsClient,
    state.setIsWsError,
  ]);

  const [_, setAuthError] = useState<null>(null);
  const onNotification = useNotificationState((state) => state.onShow);
  const { createMutateAsync } = useUser();

  const onConnected = useCallback(() => {
    setIsWsError(false);
    onNotification({
      title: "リアルタイムでコメントが更新されます。",
      type: "success",
    });
  }, [onNotification, setIsWsError]);

  const onError = useCallback(() => {
    setIsWsError(true);
    onNotification({
      title: "接続中にエラーが発生しました。",
      message: "手動で最新のコメントを読み込んでください。",
      type: "error",
    });
  }, [onNotification, setIsWsError]);

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setAuthLoading(true);
        const prevName = localStorage.getItem("user_name");
        const idTokenResult = await user.getIdTokenResult(true);
        const isHasClaims = idTokenResult.claims[TOKEN_KEY];

        if (isHasClaims) {
          try {
            setUser({
              id: user.uid,
              anonymous: user.isAnonymous,
              photo_url: user.photoURL ?? null,
              user_name: prevName ?? user.displayName ?? "匿名",
              provider_user_name: user.displayName ?? null,
              isDefaultPhoto: false,
            });

            client.setHeader("authorization", `Bearer ${idTokenResult.token}`);

            setWsClient(
              getWsClient({
                token: idTokenResult.token,
                onConnected,
                onError,
              })
            );
            setAuthLoading(false);

            return;
          } catch (error: any) {
            setAuthError(() => {
              throw new ForbiddenError();
            });
          }
        }

        try {
          await handleSetCustomClaims({
            id: user.uid,
            isAnonymous: user.isAnonymous,
            token: idTokenResult.token,
          });

          const newestToken = await auth.currentUser?.getIdToken(true);

          if (!newestToken) throw new UnauthorizedError();

          const userData = await createMutateAsync({
            id: user.uid,
            isAnonymous: user.isAnonymous,
            token: newestToken,
          });

          const { insert_users_one } = userData.data;

          if (!insert_users_one) throw new UnauthorizedError();

          const { id } = insert_users_one;

          setUser({
            id,
            anonymous: user.isAnonymous,
            photo_url: user.photoURL ?? null,
            user_name: prevName ?? user.displayName ?? "匿名",
            provider_user_name: user.displayName ?? null,
            isDefaultPhoto: false,
          });

          client.setHeader("authorization", `Bearer ${newestToken}`);
          setWsClient(
            getWsClient({
              token: idTokenResult.token,
              onConnected,
              onError,
            })
          );

          queryClient.invalidateQueries({
            queryKey: ["comments"],
          });
          queryClient.invalidateQueries({
            queryKey: ["replies"],
          });

          setAuthLoading(false);
        } catch (error: any) {
          setAuthError(() => {
            throw new UnauthorizedError();
          });
        }
      } else {
        (async () => {
          await signInAnonymously(auth).then((result) => result.user);
          const shouldShowNotification = localStorage.getItem(
            "shouldShowNotification"
          );

          if (shouldShowNotification !== "false") {
            onNotification({
              title: "匿名ユーザーでログインしました",
              type: "success",
              link: true,
              isPersistent: true,
            });

            localStorage.setItem("shouldShowNotification", "false");
          }
        })();
      }
    });

    return () => {
      unSubUser();
    };
  }, [
    createMutateAsync,
    onConnected,
    onError,
    onNotification,
    queryClient,
    setAuthLoading,
    setUser,
    setWsClient,
  ]);

  return null;
};
