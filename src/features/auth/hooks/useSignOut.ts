import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { auth } from "src/libs/firebase";
import { useGlobalState } from "src/store/global/globalStore";

export const useSignOut = () => {
  const setAuthLoading = useGlobalState((state) => state.setAuthLoading);

  const onShow = useNotificationState((state) => state.onShow);

  const signOutGoogle = useCallback(async () => {
    setAuthLoading(true);

    try {
      await signOut(auth);
      onShow({
        title: "ログアウトしました",
        type: "success",
      });
    } catch (error) {
      onShow({
        title: "ログアウトに失敗しました",
        type: "error",
      });
    }

    setAuthLoading(false);
  }, [onShow, setAuthLoading]);

  return { signOutGoogle };
};
