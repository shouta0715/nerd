/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { MenuWrapper } from "src/components/Wrapper/Menu";

const DynamicMenu = dynamic(
  () =>
    import("src/components/Elements/InputMenu").then((mod) => mod.InputMenu),
  {
    ssr: false,
  }
);

type Props = {
  children?: React.ReactNode;
};

export const Menu: FC<Props> = ({ children }) => (
  <MenuWrapper>
    <DynamicMenu />
    {children}
  </MenuWrapper>
);
