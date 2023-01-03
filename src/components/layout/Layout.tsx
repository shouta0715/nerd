import { AppShell } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <AppShell footer={<Footer />}>{children}</AppShell>
);
