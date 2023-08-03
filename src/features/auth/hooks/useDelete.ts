import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  deleteUser,
  reauthenticateWithPopup,
} from "firebase/auth";
import { useCallback } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { useRecentLoginState } from "src/features/auth/store";
import { UnauthorizedError } from "src/libs/error";
import { auth } from "src/libs/firebase";
import { useGlobalState } from "src/store/global/globalStore";

export const useDelete = () => {
  const [setAuthLoading, setIsDeleteConfirmationOpen] = useGlobalState(
    (state) => [state.setAuthLoading, state.setIsDeleteConfirmationOpen]
  );

  const setIsRequired = useRecentLoginState((state) => state.setIsRequired);

  const onShow = useNotificationState((state) => state.onShow);

  const handleRecentLogin = useCallback(() => {
    setIsRequired(true);
    onShow({
      title: "再ログインが必要です",
      message: "再ログインしてからもう一度お試しください",
      type: "error",
    });
  }, [onShow, setIsRequired]);

  const reAuthDeleteGoogleUser = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    setAuthLoading(true);

    try {
      if (!auth.currentUser) throw new UnauthorizedError();

      const { user: deletedUser } = await reauthenticateWithPopup(
        auth.currentUser,
        provider
      );

      await deleteUser(deletedUser);

      setIsDeleteConfirmationOpen(false);
      setIsRequired(false);
      onShow({
        title: "アカウントを消去しました",
        type: "success",
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        onShow({
          title: "アカウントの消去に失敗しました resent login",
          message: "時間をおいて再度お試しください",
          type: "error",
        });

        return;
      }

      onShow({
        title: "予期せぬエラーが発生しました。",
        message: "時間をおいて再度お試しください",
        type: "error",
      });
    } finally {
      setAuthLoading(false);
    }
  }, [onShow, setAuthLoading, setIsDeleteConfirmationOpen, setIsRequired]);

  const deleteGoogleUser = useCallback(async () => {
    setAuthLoading(true);
    try {
      if (!auth.currentUser) throw new UnauthorizedError();

      await deleteUser(auth.currentUser);
      setIsDeleteConfirmationOpen(false);
      onShow({
        title: "アカウントを消去しました",
        type: "success",
      });
      localStorage.removeItem("user_name");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/requires-recent-login":
            handleRecentLogin();
            break;

          case "auth/user-not-found":
            onShow({
              title: "アカウントが見つかりませんでした",
              message: "アカウントが既に消去されている可能性があります",
              type: "error",
            });
            break;

          default:
            onShow({
              title: "アカウントの消去に失敗しました delete user",
              message: "時間をおいて再度お試しください",
              type: "error",
            });
            break;
        }

        return;
      }

      onShow({
        title: "予期せぬエラーが発生しました。",
        message: "時間をおいて再度お試しください",
        type: "error",
      });
    } finally {
      setAuthLoading(false);
    }
  }, [handleRecentLogin, onShow, setAuthLoading, setIsDeleteConfirmationOpen]);

  return { deleteGoogleUser, reAuthDeleteGoogleUser };
};
