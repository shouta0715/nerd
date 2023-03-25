import React, { FC, ReactNode } from "react";
import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";
import { Navigation } from "src/components/Layout/Navigation";

import { SearchWorks } from "src/features/works/components/SearchWorks";
import { SearchWorksForm } from "src/features/works/components/SearchWorksForm";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="flex w-full">
    <div className="flex min-h-screen max-w-full flex-1 flex-col">
      <Header />
      <div className="container mx-auto flex flex-1 flex-col md:flex-row">
        <aside className="top-0 max-h-screen overflow-y-auto bg-white pb-2 md:sticky md:w-1/3 md:max-w-sm md:border-r">
          <div className="mx-auto px-6 py-2 md:space-y-4">
            <Navigation />
            <SearchWorksForm />
            <div className="hidden max-w-full overflow-hidden md:block">
              <SearchWorks />
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col bg-gray-50">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);
