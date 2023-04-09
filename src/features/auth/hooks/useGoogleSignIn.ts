/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleAuthProvider,
  deleteUser,
  signInWithPopup,
  signOut,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../../../libs/firebase";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useGoogleSignIn = () => {
  const [authLoading, setAuthLoading] = useGlobalState((state) => [
    state.authLoading,
    state.setAuthLoading,
  ]);
  const user = useUserState((state) => state.user);
  const signInGoogle = async () => {
    setAuthLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      if (!auth.currentUser) {
        throw new Error("Firebase: Error (auth/user-not-found).");
      }
      await signInWithPopup(auth, provider);
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
    } catch (error) {
      setAuthLoading(false);
    }
  };

  const deleteGoogleUser = async () => {
    try {
      setAuthLoading(true);
      if (auth.currentUser) await deleteUser(auth.currentUser);
      localStorage.removeItem("user_name");
    } catch (error: any) {
      setAuthLoading(false);
      if (error.code === "auth/requires-recent-login") {
        console.log("auth/requires-recent-login");
        if (auth.currentUser) {
          await reauthenticateWithCredential(
            auth.currentUser,
            GoogleAuthProvider.credential()
          );
          await deleteUser(auth.currentUser);
        }
      }
    }
  };

  return { signInGoogle, signOutGoogle, deleteGoogleUser };
};
