import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { FormEvent, useCallback } from "react";
import { toast } from "react-toastify";
import { auth } from "../../libs/firebase";
import { useUserAuthInputStore } from "../../store/user/userState";
import { AuthInputState } from "../../types/inputType";

export const useEmailSignIn = () => {
  const emailWithPassword = useUserAuthInputStore(
    (state) => state.emailWithPassword
  );
  const router = useRouter();

  const sigInWithEmail = useCallback(
    async ({ email, password }: AuthInputState) => {
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (result) => result.user
        );
        toast.success(`ログインに成功しました`);
        router.push("/");
      } catch (error) {
        toast.error("メールアドレスまたはパスワードが間違っています");
      }
    },
    [router]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      sigInWithEmail(emailWithPassword);
    },
    [emailWithPassword, sigInWithEmail]
  );

  return { sigInWithEmail, handleSubmit };
};
