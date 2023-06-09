import { useOpenState } from "src/features/episodes/store";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useTalkForm = (disabled: boolean) => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const [authLoading, setIsOpenModal] = useGlobalState((state) => [
    state.authLoading,
    state.setIsOpenModal,
  ]);
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      !e.nativeEvent.isComposing &&
      !disabled &&
      !authLoading
    ) {
      e.preventDefault();
      const { form } = e.currentTarget;

      if (!form) return;

      const event = new Event("submit", { cancelable: true, bubbles: true });

      form.dispatchEvent(event);
    }
  };

  return {
    user,
    setUser,
    authLoading,
    onHandleKeyDown,
    setIsOpenModal,
    isMenuOpen,
    setIsMenuOpen,
  };
};
