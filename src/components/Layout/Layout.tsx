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
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="flex w-full">
    <div className="flex min-h-screen max-w-full flex-1 flex-col">
      <Header />
      <div className="container mx-auto flex flex-1 flex-col md:flex-row">
        <aside className="top-0 max-h-screen overflow-y-auto bg-white pb-2 md:sticky md:w-1/3 md:max-w-sm md:border-r md:py-2">
          <div className="mx-auto px-6 md:space-y-4">
            <SearchWorksForm />
            <Navigation />
            <div className="hidden max-w-full overflow-hidden md:block">
              <SearchWorks />
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col ">
          <main className="relative flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </div>
      <DynamicSearchButton />
    </div>
  </div>
);
