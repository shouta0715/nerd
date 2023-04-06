/* eslint-disable no-self-assign */

import { signInAnonymously } from "firebase/auth";
import { FC, useEffect } from "react";
import { useSetCustomClaims } from "src/features/auth/hooks/useSetCustomClaims";
import { auth } from "src/libs/firebase";

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;

export const Initialize: FC = () => {
  const { setCustomClaims } = useSetCustomClaims();

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult(true);
        const isHasClaims = idTokenResult.claims[TOKEN_KEY];

        setCustomClaims(user, !isHasClaims);
      } else {
        (async () => {
          await signInAnonymously(auth).then((result) => result.user);
        })();
      }
    });

    return () => {
      unSubUser();
    };
  }, [setCustomClaims]);

  return null;
};
