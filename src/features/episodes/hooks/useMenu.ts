import { useState } from "react";
import { useOpenState } from "src/features/episodes/store";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);
  const [isCountDownModalOpen, setIsCountDownModalOpen] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen,
    isCountDownModalOpen,
    setIsCountDownModalOpen,
  };
};
