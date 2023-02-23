import { useElementSize } from "@mantine/hooks";
import { useEffect } from "react";
import { useElementSizeState } from "src/store/global/globalStore";

export const useInputFiledSize = () => {
  const { ref, height } = useElementSize();
  const setHeight = useElementSizeState((state) => state.setHeight);

  useEffect(() => {
    setHeight(height);
  }, [height, setHeight]);

  return { ref, height };
};
