import React, { FC, ReactNode } from "react";
import { CategoryNav } from "src/components/Layout/modules/CategoryNav";
import { Header } from "src/components/Layout/modules/Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div>
    <div className="flex w-full">
      <section className="flex max-w-full flex-1 flex-col">
        <Header />
        <CategoryNav />
        <main className="flex-1">{children}</main>
      </section>
    </div>
  </div>
);
