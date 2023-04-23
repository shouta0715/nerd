import React, { useState } from "react";
import { useOpenState } from "src/features/episodes/store";
import { useUserState } from "src/store/user/userState";

const InitialUserName = localStorage.getItem("user_name");

export const useInputMenu = () => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || !user) return;
    setUser({ ...user, user_name: inputValue });
    setIsMenuOpen(false);
    localStorage.setItem("user_name", inputValue);
  };

  return {
    onSubmitHandler,
    inputValue,
    setInputValue,
    setIsMenuOpen,
    user,
    isMenuOpen,
  };
};
