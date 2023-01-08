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
  <div className="min-w-screen h-screen min-h-screen w-screen overflow-hidden">
    <Header />
    <main className=" container z-0 mx-auto flex  h-full w-full border-l-0 border-r border-b-0 border-t-0 border-solid border-gray-200">
      <Nav />
      <ScrollArea className="mx-auto mt-16 mb-14 w-full flex-1 md:mb-0">
        {children}
      </ScrollArea>
      <Aside />
    </main>
    <Footer />
  </div>
);
