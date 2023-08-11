import { ChevronRightIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React from "react";

import BeginnerIcon from "public/icons/BeginnerIcon.svg";
import { ActiveLink } from "src/components/Elements/ActiveLink";
import { Nav } from "src/components/Layouts/Nav";

const mockNavigation = [
  {
    name: "使い方",
    href: "/usage",
    icon: BeginnerIcon,
    color: "fill-teal-600",
  },
  {
    name: "よくある質問",
    href: "/faq",
    icon: LightBulbIcon,
    color: "stroke-amber-600",
  },
];

const DynamicSearchWorksForm = dynamic(() =>
  import("src/features/works/search/components/SearchWorksForm").then(
    (mod) => mod.SearchWorksForm
  )
);

const navList = mockNavigation.map((item) => (
  <ActiveLink
    key={item.name}
    activeClassName="text-indigo-600"
    className="group relative flex items-center justify-center rounded-md py-1.5 text-xs hover:text-indigo-600 md:py-2 md:text-sm"
    href={`${item.href}`}
  >
    {({ isActive }) => (
      <>
        <item.icon className={`mr-2 h-full w-6 ${item.color}`} />
        <div className="flex h-full flex-1 items-center">
          <span className="inline-block flex-1">{item.name}</span>
          <ChevronRightIcon
            className={clsx(
              isActive ? "stroke-indigo-600" : "stroke-slate-300",
              "h-4 w-4  group-hover:stroke-indigo-600"
            )}
          />
        </div>
      </>
    )}
  </ActiveLink>
));

export const Aside = () => (
  <aside className="w-full border-b border-b-slate-200 pb-4 md:w-56 md:border-b-0">
    <div className="sticky top-8 mx-auto  md:max-h-screen md:space-y-4 md:overflow-y-auto">
      <div className="grid grid-cols-2 gap-x-2 md:hidden">{navList}</div>
      <div className="sticky top-8 mx-auto hidden md:block md:max-h-screen md:space-y-4 md:overflow-y-auto">
        <DynamicSearchWorksForm />
        <Nav />
      </div>
    </div>
  </aside>
);
