import { ScrollArea } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="min-w-screen min-h-screen">
    <Header />
    <main className="flex h-full w-full border-l-0 border-r border-b-0 border-t-0 border-solid border-gray-200">
      <Nav />
      <ScrollArea className="mx-auto mt-16 w-full flex-1 ">
        {children}
      </ScrollArea>
    </main>
    <Footer />
  </div>
);
