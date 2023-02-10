import React, { FC, ReactNode, Suspense } from "react";
import { Spinner } from "src/components/Layout/loading/Spinner";
import { Aside } from "src/components/Layout/modules/Aside";
import { CategoryNav } from "src/components/Layout/modules/CategoryNav";
import { Footer } from "src/components/Layout/modules/Footer";
import { Header } from "src/components/Layout/modules/Header";
import { Nav } from "src/components/Layout/modules/Nav";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="min-w-screen  min-h-screen ">
    <div className="container mx-auto flex h-full w-full">
      <Nav />
      <section className="mb-14 flex max-w-full flex-1 flex-col  md:mb-0 md:max-w-[88%] lg:max-w-[54.66667%]">
        <Header />
        <Suspense fallback={<Spinner />}>
          <CategoryNav />
        </Suspense>
        <main className="flex-1">{children}</main>
      </section>
      <Aside />
    </div>
    <Footer />
  </div>
);
