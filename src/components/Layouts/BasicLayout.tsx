import dynamic from "next/dynamic";
import React, { ReactElement } from "react";
import { Background } from "src/components/Elements/Background";
import { Aside } from "src/components/Layouts/Aside";

import { Header } from "src/components/Layouts/Header";
import { AuthModal } from "src/components/Modal/Auth";
import { Provider } from "src/features/provider";

const DynamicSearchButton = dynamic(
  () =>
    import("src/components/Elements/SearchButton").then(
      (mod) => mod.SearchButton
    ),
  {
    ssr: false,
  }
);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider>{children}</Provider>
);

export const BasicLayout = (page: ReactElement) => (
  <LayoutProvider>
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-x-6 md:flex-row">
        <Background />
        <Aside />
        <main className="w-full flex-1 bg-white/25">{page}</main>
      </div>
    </div>
    <DynamicSearchButton />
    <AuthModal />
  </LayoutProvider>
);

export const BasicLayoutOnlyHeader = (page: ReactElement) => (
  <LayoutProvider>
    <div className="flex min-h-screen animate-fadeUp flex-col ">
      <Header />
      <div className="container relative contents flex-1 lg:mx-auto lg:flex">
        {page}
      </div>
    </div>
    <AuthModal />
  </LayoutProvider>
);

export const BasicListLayout = (page: ReactElement) => (
  <LayoutProvider>
    <div className="flex min-h-screen flex-col">
      <Header />
      <Background />
      <main className="flex flex-1 animate-fadeUp flex-col">{page}</main>
    </div>
    <AuthModal />
  </LayoutProvider>
);
