import { useState } from "react";

export const useMenu = () => {
  const [isCountDownModalOpen, setIsCountDownModalOpen] = useState(false);

  return {
    isCountDownModalOpen,
    setIsCountDownModalOpen,
  };
};
