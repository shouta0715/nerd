/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-self-assign */

import { signInAnonymously } from "firebase/auth";
import { FC, useEffect } from "react";
import { useSetCustomClaims } from "src/features/auth/hooks/useSetCustomClaims";
import { auth } from "src/libs/firebase";
import { useGlobalState } from "src/store/global/globalStore";

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;

type Props = {
  children: React.ReactNode;
};

export const FirebaseAuth: FC<Props> = ({ children }) => {
  const { setCustomClaims } = useSetCustomClaims();
  const setAuthLoading = useGlobalState((state) => state.setAuthLoading);

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      setAuthLoading(true);
      if (user) {
        const idTokenResult = await user.getIdTokenResult(true);
        const isHasClaims = idTokenResult.claims[TOKEN_KEY];

        await setCustomClaims(user, !isHasClaims);
      } else {
        (async () => {
          await signInAnonymously(auth).then((result) => result.user);
        })();
      }

      setAuthLoading(false);
    });

    return () => {
      unSubUser();
    };
  }, [setAuthLoading, setCustomClaims]);

  return <>{children}</>;
};
