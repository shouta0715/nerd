import dynamic from "next/dynamic";
import React, { FC, ReactNode } from "react";
import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";
import { Navigation } from "src/components/Layout/Navigation";

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

type Props = {
  children: ReactNode;
  isShowSearchMenu?: boolean;
};

export const Layout: FC<Props> = ({ children, isShowSearchMenu = true }) => (
  <div className="flex w-full">
    <div className="flex min-h-screen max-w-full flex-1 flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="top-0 z-10 max-h-screen  overflow-y-auto border-b border-slate-200 bg-white py-2 md:sticky md:w-1/3 md:max-w-sm md:border-b-0 md:border-r md:py-4">
          <div className="container mx-auto px-4 md:space-y-4">
            <SearchWorksForm />
            <Navigation />
            <div className="hidden max-w-full overflow-hidden md:block">
              <SearchWorks />
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col ">
          <main className="relative flex flex-1 flex-col bg-gray-50">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <DynamicSearchButton isShowSearchMenu={isShowSearchMenu} />
    </div>
  </div>
);
