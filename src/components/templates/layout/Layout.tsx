import { ScrollArea } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { Nav } from "../../atom/layout/Nav";
import { Footer } from "../../atom/layout/Footer";
import { Header } from "../../atom/layout/Header";
import { Aside } from "../../atom/layout/Aside";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="min-w-screen min-h-screen ">
    <Header />
    <main className=" container  mx-auto  flex h-full w-full">
      <Nav />
      <ScrollArea className=" mt-16 mb-14 w-full flex-1 md:mb-0">
        {children}
      </ScrollArea>
      <Aside />
    </main>
    <Footer />
  </div>
);
