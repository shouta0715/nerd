import dynamic from "next/dynamic";
import React from "react";
import { Nav } from "src/components/Layouts/Nav";

const DynamicSearchWorksForm = dynamic(() =>
  import("src/features/works/components/SearchWorksForm").then(
    (mod) => mod.SearchWorksForm
  )
);

const DynamicSearchWorks = dynamic(() =>
  import("src/features/works/components/SearchWorks").then(
    (mod) => mod.SearchWorks
  )
);

export const Aside = () => (
  <aside className="w-full border-b border-b-slate-200 pb-4 md:block md:w-56 md:border-b-0">
    <div className="container sticky top-8 mx-auto  md:max-h-screen md:space-y-4 md:overflow-y-auto">
      <DynamicSearchWorksForm />
      <Nav />
      <div className="hidden max-w-full md:block">
        <DynamicSearchWorks />
      </div>
    </div>
  </aside>
);
