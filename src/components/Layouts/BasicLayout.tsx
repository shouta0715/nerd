import dynamic from "next/dynamic";
import React, { ReactElement } from "react";

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
        <div className="flex flex-1 flex-col md:flex-row">
          <Aside />
          <div className="flex flex-1 flex-col bg-gray-50">
            <main className="relative flex flex-1 flex-col bg-gray-50">
              {page}
            </main>
            <DynamicSearchButton />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
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
      <main className="flex flex-1 animate-fadeUp flex-col bg-gray-50">
        {page}
      </main>
    </div>
    <AuthModal />
  </LayoutProvider>
);
