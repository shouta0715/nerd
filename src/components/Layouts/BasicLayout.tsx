import dynamic from "next/dynamic";
import React, { ReactElement } from "react";
import { Modal } from "src/components/Elements/Modal";
import { Header } from "src/components/Layouts/Header";
import { Nav } from "src/components/Layouts/Nav";
import { Provider } from "src/features/provider";
import { SearchWorks } from "src/features/works/components/SearchWorks";
import { SearchWorksForm } from "src/features/works/components/SearchWorksForm";

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
          <aside className="top-0 z-10 max-h-screen overflow-y-auto  border-b border-slate-200 bg-white pb-2 md:sticky md:w-1/3 md:max-w-sm md:border-b-0 md:border-r md:py-4 md:shadow">
            <div className="md:x-4 container mx-auto px-2 md:space-y-4">
              <SearchWorksForm />
              <Nav />
              <div className="hidden max-w-full overflow-hidden md:block">
                <SearchWorks />
              </div>
            </div>
          </aside>
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
    <Modal />
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
    <Modal />
  </LayoutProvider>
);
