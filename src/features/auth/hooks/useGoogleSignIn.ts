/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../libs/firebase";

export const useGoogleSignIn = () => {
  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      if (!auth.currentUser) {
        throw new Error("Firebase: Error (auth/user-not-found).");
      }
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("Googleアカウントでのログインをキャンセルしました");
      }
    }
  };

  const signOutGoogle = async () => {
    try {
      await signOut(auth);

      console.log("Googleアカウントとの連携を解除しました");
    } catch (error) {
      console.log("Googleアカウントとの連携を解除できませんでした");
    }
  };

  return { signInGoogle, signOutGoogle };
};
