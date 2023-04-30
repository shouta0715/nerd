/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import dynamic from "next/dynamic";
import React from "react";
import { MenuWrapper } from "src/features/play/components/MenuWrapper";

const DynamicMenu = dynamic(
  () =>
    import("src/features/play/components/PlayMenu").then((mod) => mod.PlayMenu),
  {
    ssr: false,
  }
);

export const EpisodeMenu = () => (
  <MenuWrapper>
    <DynamicMenu />
  </MenuWrapper>
);
