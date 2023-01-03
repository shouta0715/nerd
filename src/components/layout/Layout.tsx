import { AppShell, ScrollArea } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <AppShell
    className="container mx-auto"
    header={<Header />}
    footer={<Footer />}
  >
    <ScrollArea className="container h-full w-full">{children}</ScrollArea>
  </AppShell>
);
