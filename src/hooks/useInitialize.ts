/* eslint-disable no-self-assign */

import { signInAnonymously } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../libs/firebase";
import { createClients } from "../libs/graphqlClient";
import { useUserState } from "../store/user/userState";
import { useGlobalState } from "src/store/global/globalStore";

export const useInitialize = () => {
  const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;
  const setAllClient = useGlobalState((state) => state.setAllClient);
  const setUser = useUserState((state) => state.setUser);

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult(true);
        const isHasClaims = idTokenResult.claims[TOKEN_KEY];
        if (idTokenResult.token && isHasClaims) {
          const { client, wsClient } = createClients(idTokenResult.token);
          setAllClient({
            client,
            wsClient,
            isClient: true,
            isWsClient: true,
          });
        } else {
          const res = await fetch("/api/auth/setCustomClaims", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: idTokenResult.token,
            }),
          });

          if (res.status === 200 && res.ok) {
            const token = await auth.currentUser?.getIdToken(true);
            const { client, wsClient } = createClients(token);
            setAllClient({
              client,
              wsClient,
              isClient: true,
              isWsClient: true,
            });
          }
        }
        setUser({
          id: user.uid,
          anonymous: user.isAnonymous,
          photo_url: user.photoURL,
          user_name: user.displayName ?? "匿名",
        });
      } else {
        (async () => {
          await signInAnonymously(auth).then((result) => result.user);
        })();
      }
    });

    return () => {
      unSubUser();
    };
  }, [TOKEN_KEY, setUser, setAllClient]);
};
