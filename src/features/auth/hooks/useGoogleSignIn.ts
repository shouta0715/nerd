/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleAuthProvider,
  deleteUser,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../libs/firebase";
import { useNotificationState } from "src/components/Elements/Notification/store";
import {
  handleError,
  handleNoUser,
  handleRequireReLogin,
} from "src/features/auth/hooks";
import { UnauthorizedError } from "src/libs/error";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useGoogleSignIn = () => {
  const [authLoading, setAuthLoading, setIsDeleteConfirmationOpen] =
    useGlobalState((state) => [
      state.authLoading,
      state.setAuthLoading,
      state.setIsDeleteConfirmationOpen,
    ]);

  const onShow = useNotificationState((state) => state.onShow);
  const [_, setIsError] = useState(null);

  const user = useUserState((state) => state.user);
  const signInGoogle = async () => {
    setAuthLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      if (!auth.currentUser) {
        setIsError(() => {
          throw new UnauthorizedError();
        });
      }
      await signInWithPopup(auth, provider);
      onShow({
        title: "ログインしました",
        type: "success",
      });
    } catch (error: any) {
      setAuthLoading(false);
    } finally {
      if (!user?.anonymous && authLoading) {
        setAuthLoading(false);
      }
    }
  };

  const signOutGoogle = async () => {
    try {
      setAuthLoading(true);
      await signOut(auth);

      onShow({
        title: "ログアウトしました",
        type: "success",
      });
      setAuthLoading(false);
    } catch (error) {
      setAuthLoading(false);
      onShow({
        title: "ログアウトに失敗しました",
        type: "error",
      });
    }
  };

  const deleteGoogleUser = async () => {
    try {
      setAuthLoading(true);

      if (auth.currentUser) {
        await deleteUser(auth.currentUser);
        setIsDeleteConfirmationOpen(false);
        onShow({
          title: "アカウントを消去しました",
          type: "success",
        });
        localStorage.removeItem("user_name");
      } else {
        onShow({
          title: "アカウントの消去に失敗しました",
          type: "error",
        });
      }
    } catch (error: any) {
      switch (error.code) {
        case "auth/requires-recent-login":
          handleRequireReLogin({
            setIsDeleteConfirmationOpen,
            setAuthLoading,
            onShow,
          });
          break;

        case "auth/user-not-found":
          handleNoUser({
            setIsDeleteConfirmationOpen,
            setAuthLoading,
            onShow,
          });
          break;

        default:
          handleError({
            setIsDeleteConfirmationOpen,
            setAuthLoading,
            onShow,
          });
      }

      setAuthLoading(false);
    }
  };

  return { signInGoogle, signOutGoogle, deleteGoogleUser };
};
