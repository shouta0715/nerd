/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleAuthProvider,
  deleteUser,
  signInWithPopup,
  signOut,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../libs/firebase";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { UnauthorizedError } from "src/libs/error";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useGoogleSignIn = () => {
  const [authLoading, setAuthLoading] = useGlobalState((state) => [
    state.authLoading,
    state.setAuthLoading,
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
    } catch (error) {
      setAuthLoading(false);
    }
  };

  const deleteToken = async (id: string) => {
    fetch("/api/user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };

  const deleteGoogleUser = async () => {
    try {
      setAuthLoading(true);

      if (auth.currentUser) {
        await deleteToken(auth.currentUser.uid);
        await deleteUser(auth.currentUser);
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
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (credential) {
            await reauthenticateWithCredential(auth.currentUser, credential);
            await deleteToken(auth.currentUser.uid);
            await deleteUser(auth.currentUser);
          }
        }
      } else if (error.code === "auth/user-not-found") {
        setIsError(() => {
          throw new UnauthorizedError();
        });
      }

      setAuthLoading(false);

      setIsError(() => {
        throw new UnauthorizedError();
      });
    } finally {
      setAuthLoading(false);
    }
  };

  return { signInGoogle, signOutGoogle, deleteGoogleUser };
};
