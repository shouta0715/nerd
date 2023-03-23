import {
  ChevronRightIcon,
  Cog8ToothIcon,
  DocumentArrowUpIcon,
  ListBulletIcon,
  RocketLaunchIcon,
  TvIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { FC } from "react";
import { BeginnerIcon } from "src/components/Icon/BeginnerIcon";

const mockNavigation = [
  {
    name: "今日放送",
    href: "/list/todayEpisodes",
    icon: TvIcon,
    color: " stroke-indigo-500",
  },
  {
    name: "今期のアニメ",
    href: "/list/thisSeason",
    icon: RocketLaunchIcon,
    color: " stroke-red-500",
  },

  {
    name: "作品要望",
    href: "/",
    icon: DocumentArrowUpIcon,
    color: "stroke-green-500",
  },
  {
    name: "マイリスト",
    href: "/",
    icon: ListBulletIcon,
    color: "fill-orange-500 stroke-orange-500",
  },
  {
    name: "設定",
    href: "/",
    icon: Cog8ToothIcon,
    color: "stroke-gray-500",
  },
  {
    name: "使い方",
    href: "/",
    icon: BeginnerIcon,
    color: "stroke-blue-500",
  },
];

const navList = mockNavigation.map((item) => (
  <li
    key={item.name}
    className="group border-b bg-white  py-2 text-xs font-bold hover:border-indigo-500 md:text-sm"
  >
    <Link className="flex items-center space-x-4" href={`${item.href}`}>
      <item.icon className={`h-5 w-5 md:h-6 md:w-6 ${item.color}`} />
      <span className="mt-1 inline-block flex-1">{item.name}</span>
      <ChevronRightIcon className="h-4 w-4 stroke-slate-300 group-hover:stroke-indigo-500 md:h-6 md:w-6 " />
    </Link>
  </li>
));

export const Navigation: FC = () => (
  <nav>
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-1">{navList}</ul>
  </nav>
);
