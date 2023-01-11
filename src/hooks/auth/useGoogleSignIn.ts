import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { auth } from "../../libs/firebase";

export const useGoogleSignIn = () => {
  const router = useRouter();
  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider).then(
        (result) => result.user
      );
      router.push("/");
      toast.success(`ようこそ ${user?.displayName}!`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (!(error.message === "Firebase: Error (auth/popup-closed-by-user)."))
        toast.error("ログインに失敗しました。もう一度やり直してください。");
    }
  };

  return signInGoogle;
};
