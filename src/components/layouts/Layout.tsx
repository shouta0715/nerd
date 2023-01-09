import { ScrollArea } from "@mantine/core";
import React, { FC, ReactNode } from "react";

import { Aside } from "./modules/Aside";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";
import { Nav } from "./modules/Nav";

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
