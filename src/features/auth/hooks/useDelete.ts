import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  deleteUser,
  reauthenticateWithPopup,
} from "firebase/auth";
import { useCallback } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { UnauthorizedError } from "src/libs/error";
import { auth } from "src/libs/firebase";
import { useGlobalState } from "src/store/global/globalStore";

export const useDelete = () => {
  const [setAuthLoading, setIsDeleteConfirmationOpen] = useGlobalState(
    (state) => [state.setAuthLoading, state.setIsDeleteConfirmationOpen]
  );

  const onShow = useNotificationState((state) => state.onShow);

  const resentLogin = useCallback(async () => {
    console.log("resentLogin");
    const provider = new GoogleAuthProvider();

    try {
      if (!auth.currentUser) throw new UnauthorizedError();
      const { user: deletedUser } = await reauthenticateWithPopup(
        auth.currentUser,
        provider
      );

      await deleteUser(deletedUser);
      setIsDeleteConfirmationOpen(false);
      onShow({
        title: "アカウントを消去しました",
        type: "success",
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        onShow({
          title: "アカウントの消去に失敗しました",
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
    }
  }, [onShow, setIsDeleteConfirmationOpen]);

  const deleteGoogleUser = useCallback(async () => {
    console.log("deleteGoogleUser");
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
            resentLogin();
            break;

          default:
            onShow({
              title: "アカウントの消去に失敗しました",
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
  }, [onShow, resentLogin, setAuthLoading, setIsDeleteConfirmationOpen]);

  return { deleteGoogleUser };
};
