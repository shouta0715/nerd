import {
  ArrowSmallLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { WorkSkelton } from "src/components/Elements/Loader/loaders/WorkSkelton";

export const SeriesSkelton = () => {
  const router = useRouter();

  return (
    <section>
      <header className="sticky top-0 z-10 border-b bg-white/95">
        <div className="relative flex w-full items-center space-x-4 py-3 pl-2 pr-4">
          <button className="flex justify-center " onClick={router.back}>
            <ArrowSmallLeftIcon className="h-6 w-6 text-black" />
          </button>
          <div className=" w-full flex-1 animate-pulse ">
            <div className="mx-auto h-3 w-full max-w-md bg-slate-200" />
          </div>
          <Link
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text font-bold text-transparent"
            href="/"
          >
            Nerd
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-6 pb-12 pt-4">
          <ul className="grid grid-cols-1 gap-4 ">
            <WorkSkelton is_short isButton />
          </ul>
        </div>
      </main>
      <Link
        className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-indigo-500  shadow-md shadow-indigo-400 md:hidden"
        href="/search"
      >
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
      </Link>
    </section>
  );
};
