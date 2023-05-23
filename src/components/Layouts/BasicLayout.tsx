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
    <div className="flex w-full">
      <div className="flex min-h-screen max-w-full flex-1 flex-col">
        <Header />
        <div className="mx-auto flex w-full max-w-7xl flex-1 gap-x-8 bg-white/20 px-4 py-4 sm:px-6  md:py-10 lg:px-8">
          <Background />
          <Aside />
          <main className="flex w-full flex-1 flex-col pt-10 md:pt-0">
            {page}
            <DynamicSearchButton />
          </main>
        </div>
      </div>
    </div>

    <AuthModal />
  </LayoutProvider>
);

export const BasicLayoutOnlyHeader = (page: ReactElement) => (
  <LayoutProvider>
    <div className="flex min-h-screen animate-fadeUp flex-col ">
      <Header />
      <div className="container relative contents flex-1 lg:mx-auto lg:flex ">
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
      <main className="flex flex-1 animate-fadeUp flex-col px-4 py-4 sm:px-6 md:flex-row md:py-10 lg:px-8">
        {page}
      </main>
    </div>
    <AuthModal />
  </LayoutProvider>
);
