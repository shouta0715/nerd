import { Bars3Icon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { useGlobalState } from "src/store/global/globalStore";

const DynamicSidebar = dynamic(() =>
  import("src/components/Layouts/Sidebar").then((mod) => mod.Sidebar)
);

export const DisableAuthHeader = () => {
  const setSidebarOpen = useGlobalState((state) => state.setSidebarOpen);

  return (
    <>
      <header className="shrink-0 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex gap-x-4">
            <button
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
              type="button"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            <Link className=" text-3xl font-black sm:text-4xl" href="/">
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nerd
              </span>
            </Link>
          </div>
        </div>
      </header>
      <DynamicSidebar />
    </>
  );
};
