import { ScrollArea } from "@mantine/core";
import React, { FC, ReactNode } from "react";

import { Aside } from "./modules/Aside";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";
import { Nav } from "./modules/Nav";
import { CategoryNav } from "./modules/CategoryNav";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="min-w-screen min-h-screen ">
    <div className=" container  mx-auto  flex h-full w-full">
      <Nav />
      <section className="mb-14 w-full flex-1 md:mb-0">
        <Header />
        <CategoryNav />
        <ScrollArea>{children}</ScrollArea>
      </section>
      <Aside />
    </div>
    <Footer />
  </div>
);
