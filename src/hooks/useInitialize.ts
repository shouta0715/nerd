import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { auth, db } from "../libs/firebase";
import { createClient } from "../libs/graphqlClient";
import { useGlobalStore } from "../store/global/globalStore";

let unSub: () => void;

export const useInitialize = () => {
  const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string;
  const setClient = useGlobalStore((state) => state.setClient);

  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const isHasClaims = idTokenResult.claims[TOKEN_KEY];

        if (token && isHasClaims) {
          const client = createClient(token);
          setClient(client);
        } else {
          const userRef = doc(db, "user_meta", user.uid);

          unSub = onSnapshot(userRef, async () => {
            const tokenSnap = await user.getIdToken();
            const idTokenResultSnap = await user.getIdTokenResult();
            const isHasClaimsSnap = idTokenResultSnap.claims[TOKEN_KEY];

            if (tokenSnap && isHasClaimsSnap) {
              const client = createClient(tokenSnap);
              setClient(client);
            }
          });
        }
      }
    });

    return () => {
      unSubUser();
      console.log(unSub);
      // unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setClient]);
};
