/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleAuthProvider,
  deleteUser,
  signInWithPopup,
  signOut,
  OAuthProvider,
  reauthenticateWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../libs/firebase";
import { useNotificationState } from "src/components/Elements/Notification/store";

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
      } else {
        setIsError(() => {
          throw new UnauthorizedError();
        });
      }

      localStorage.removeItem("user_name");
    } catch (error: any) {
      if (error.code === "auth/requires-recent-login") {
        if (auth.currentUser) {
          const provider = new OAuthProvider("google.com");

          const { user: deletedUser } = await reauthenticateWithPopup(
            auth.currentUser,
            provider
          );

          await deleteUser(deletedUser);
          setIsDeleteConfirmationOpen(false);
          setAuthLoading(false);
          onShow({
            title: "アカウントを消去しました",
            type: "success",
          });

          localStorage.removeItem("user_name");

          return;
        }
      } else if (error.code === "auth/user-not-found") {
        onShow({
          title: "アカウントが見つかりませんでした",
          type: "error",
        });
      }

      setAuthLoading(false);
      onShow({
        title: "アカウントの消去に失敗しました",
        type: "error",
      });
    }
  };

  return { signInGoogle, signOutGoogle, deleteGoogleUser };
};
