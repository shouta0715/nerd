import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../libs/firebase";

export const useGoogleSignIn = () => {
  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider).then((result) => result.user);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (!(error.message === "Firebase: Error (auth/popup-closed-by-user)."))
        console.log(error.message);
    }
  };

  return signInGoogle;
};
