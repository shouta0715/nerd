import { useDelete } from "src/features/auth/hooks/useDelete";
import { useSignIn } from "src/features/auth/hooks/useSignIn";
import { useSignOut } from "src/features/auth/hooks/useSignOut";

export const useGoogle = () => {
  const { signInGoogle } = useSignIn();
  const { signOutGoogle } = useSignOut();
  const { deleteGoogleUser, reAuthDeleteGoogleUser } = useDelete();

  return {
    signInGoogle,
    signOutGoogle,
    deleteGoogleUser,
    reAuthDeleteGoogleUser,
  };
};
