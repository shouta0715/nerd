import React, { FC, ReactNode } from "react";
import { Header } from "src/components/Layout/modules/Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="flex w-full">
    <section className="flex max-w-full flex-1 flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </section>
  </div>
);
