import React from "react";
import { Nav } from "src/components/Layouts/Nav";
import { SearchWorks } from "src/features/works/components/SearchWorks";
import { SearchWorksForm } from "src/features/works/components/SearchWorksForm";

export const Aside = () => (
  <aside className="top-0 z-10 max-h-screen overflow-y-auto  border-b border-slate-200 pb-2 md:sticky md:w-1/3 md:max-w-sm md:border-b-0 md:border-r md:py-4 md:shadow">
    <div className="md:x-4 container mx-auto px-2 md:space-y-4">
      <SearchWorksForm />
      <Nav />
      <div className="hidden max-w-full overflow-hidden md:block">
        <SearchWorks />
      </div>
    </div>
  </aside>
);
