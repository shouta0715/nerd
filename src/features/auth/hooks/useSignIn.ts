import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCallback } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { auth } from "src/libs/client/firebase";
import { UnauthorizedError } from "src/libs/error";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useSignIn = () => {
  const [authLoading, setAuthLoading] = useGlobalState((state) => [
    state.authLoading,
    state.setAuthLoading,
  ]);

  const onShow = useNotificationState((state) => state.onShow);
  const user = useUserState((state) => state.user);

  const signInGoogle = useCallback(async () => {
    setAuthLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      if (!auth.currentUser) throw new UnauthorizedError();

      await signInWithPopup(auth, provider);
      onShow({
        title: "ログインしました",
        type: "success",
      });
    } catch (error: unknown) {
      setAuthLoading(false);
      if (error instanceof UnauthorizedError) {
        onShow({
          title: "ログインに失敗しました",
          type: "error",
        });
      }
    } finally {
      if (!user?.anonymous && authLoading) {
        setAuthLoading(false);
      }
    }
  }, [authLoading, onShow, setAuthLoading, user?.anonymous]);

  return { signInGoogle };
};
