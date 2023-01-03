import React from "react";
import { Drawer as MDrawer } from "@mantine/core";
import { useGlobalStore } from "../../store/global/globalStore";

export const Drawer = () => {
  const isOpenBurger = useGlobalStore((state) => state.isOpenBurger);
  const changeIsOpenBurger = useGlobalStore(
    (state) => state.changeIsOpenBurger
  );

  return (
    <MDrawer
      overlayOpacity={0.55}
      overlayBlur={3}
      onClose={changeIsOpenBurger}
      opened={isOpenBurger}
      size="75%"
    >
      Drawer
    </MDrawer>
  );
};
