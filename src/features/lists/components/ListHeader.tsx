import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { Autocomplete } from "src/features/lists/components/Autocomplete";

type Props = {
  autoCompleteData: AutoCompleteData[];
};

export const ListHeader: FC<Props> = ({ autoCompleteData }) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-slate-200 bg-white/95">
      <div className="container mx-auto bg-transparent py-3">
        <div className="relative flex w-full items-center space-x-2.5 pl-2 pr-4">
          <button className="flex justify-center " onClick={router.back}>
            <ArrowSmallLeftIcon className="h-6 w-6 text-black" />
          </button>
          <div className="flex-1">
            <Autocomplete autoCompleteData={autoCompleteData} />
          </div>
          <Link
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text font-bold text-transparent"
            href="/"
          >
            Nerd
          </Link>
        </div>
      </div>
    </header>
  );
};