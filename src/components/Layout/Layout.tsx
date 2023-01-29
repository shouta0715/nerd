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
  <div className="min-w-screen  min-h-screen ">
    <div className="container mx-auto flex h-full w-full">
      <Nav />
      <section className="mb-14 flex max-w-full flex-1 flex-col  md:mb-0 md:max-w-[88%] lg:max-w-[54.66667%]">
        <Header />
        <CategoryNav />
        <main className="flex-1">{children}</main>
      </section>
      <Aside />
    </div>
    <Footer />
  </div>
);
