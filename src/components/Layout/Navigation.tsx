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
import BeginnerIcon from "public/icons/BeginnerIcon.svg";

const mockNavigation = [
  {
    name: "今日放送",
    href: "/list/todayEpisodes",
    icon: TvIcon,
  },
  {
    name: "今期のアニメ",
    href: "/list/seasonWorks",
    icon: RocketLaunchIcon,
  },

  {
    name: "作品要望",
    href: "/",
    icon: DocumentArrowUpIcon,
  },
  {
    name: "マイリスト",
    href: "/",
    icon: ListBulletIcon,
  },
  {
    name: "設定",
    href: "/",
    icon: Cog8ToothIcon,
  },
  {
    name: "使い方",
    href: "/",
    icon: BeginnerIcon,
  },
];

const navList = mockNavigation.map((item) => (
  <li
    key={item.name}
    className="group flex items-center  justify-center space-x-2 rounded-md  p-2 text-xs font-bold md:text-sm md:hover:bg-gray-100"
  >
    <item.icon className="h-full w-6" />
    <Link className="flex flex-1 items-center" href={`${item.href}`}>
      <span className="mt-1 inline-block flex-1">{item.name}</span>
      <ChevronRightIcon className="h-4 w-4 stroke-slate-300 group-hover:stroke-indigo-500 md:h-6 md:w-6 " />
    </Link>
  </li>
));

export const Navigation: FC = () => (
  <nav>
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">{navList}</ul>
  </nav>
);
