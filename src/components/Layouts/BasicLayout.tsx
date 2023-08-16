import dynamic from "next/dynamic";
import React, { ReactElement } from "react";
import { Background } from "src/components/Elements/Background";
import { Aside } from "src/components/Layouts/Aside";
import { Footer } from "src/components/Layouts/Footer";
import { Header } from "src/components/Layouts/Header";
import { DisableAuthHeader } from "src/components/Layouts/Header/DisableAuthHeader";
import { Provider } from "src/features/provider";

const DynamicSearchButton = dynamic(() =>
  import("src/components/Elements/SearchButton").then((mod) => mod.SearchButton)
);

const DynamicAuthModal = dynamic(() =>
  import("src/components/Modal/Auth").then((mod) => mod.AuthModal)
);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider>{children}</Provider>
);

export const BasicLayout = (page: ReactElement, notice = false) => (
  <LayoutProvider>
    <div className="flex w-full">
      <div className="flex min-h-screen max-w-full flex-1 flex-col">
        <Header notice={notice} />
        <div className="mx-auto flex w-full max-w-7xl flex-1  flex-col gap-x-8 bg-white/20 px-4 py-4 sm:px-6  md:flex-row md:py-10 lg:px-8">
          <Background />
          <Aside />
          <main className="flex w-full flex-1 flex-col pt-10 md:pt-0">
            {page}
            <DynamicSearchButton />
          </main>
        </div>
        <Footer />
      </div>
    </div>
    <DynamicAuthModal />
  </LayoutProvider>
);

export const BasicLayoutOnlyHeader = (page: ReactElement, notice = false) => (
  <LayoutProvider>
    <div className="flex min-h-screen max-w-full flex-1 flex-col">
      <Header notice={notice} />
      <div className="mx-auto flex h-full w-full max-w-7xl flex-1  flex-col items-start gap-x-8  px-0   lg:flex-row lg:px-8">
        <Background />
        {page}
      </div>
    </div>
    <DynamicAuthModal />
  </LayoutProvider>
);

export const BasicListLayout = (page: ReactElement, notice = false) => (
  <LayoutProvider>
    <div className="flex w-full">
      <div className="flex min-h-screen max-w-full flex-1 flex-col">
        <Header notice={notice} />
        <div className="mx-auto flex w-full max-w-7xl flex-1  flex-col gap-x-8 bg-white/20 px-4 py-4 sm:px-6  md:flex-row md:py-10 lg:px-8">
          <Background />
          <Aside />
          <main className="flex w-full flex-1 flex-col pt-10 md:pt-0">
            {page}
            <DynamicSearchButton />
          </main>
        </div>
        <Footer />
      </div>
    </div>
    <DynamicAuthModal />
  </LayoutProvider>
);

export const OnlyProviderLayout = (page: ReactElement) => (
  <LayoutProvider>{page}</LayoutProvider>
);

export const DisableAuthLayout = (page: ReactElement) => {
  return (
    <Provider authDisabled>
      <div className="flex w-full">
        <div className="flex min-h-screen max-w-full flex-1 flex-col">
          <DisableAuthHeader />
          <div className="mx-auto flex w-full max-w-7xl flex-1  flex-col gap-x-8 bg-white/20 px-4 py-4 sm:px-6  md:flex-row md:py-10 lg:px-8">
            <Background />
            <Aside />
            <main className="flex w-full flex-1 flex-col pt-10 md:pt-0">
              {page}
              <DynamicSearchButton />
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};
