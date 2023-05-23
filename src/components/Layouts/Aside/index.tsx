import React from "react";
import { Nav } from "src/components/Layouts/Nav";
import { SearchWorks } from "src/features/works/components/SearchWorks";
import { SearchWorksForm } from "src/features/works/components/SearchWorksForm";

export const Aside = () => (
  <aside className="static top-0 w-full shrink-0 bg-white/25  pt-8 md:sticky md:block md:w-56">
    <div className="container mx-auto px-2 md:space-y-4 md:px-4">
      <SearchWorksForm />
      <Nav />
      <div className="hidden max-w-full overflow-hidden md:block">
        <SearchWorks />
      </div>
    </div>
  </aside>
);
