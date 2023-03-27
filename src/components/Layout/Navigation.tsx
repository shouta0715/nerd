import {
  ChevronRightIcon,
  Cog8ToothIcon,
  ListBulletIcon,
  RocketLaunchIcon,
  TvIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { FC } from "react";
import BeginnerIcon from "public/icons/BeginnerIcon.svg";

const mockNavigation = [
  {
    name: "今日放送",
    href: "/list/todayEpisodes",
    icon: TvIcon,
    color: " stroke-indigo-500",
  },
  {
    name: "今期のアニメ",
    href: "/list/seasonWorks",
    icon: RocketLaunchIcon,
    color: " stroke-red-500",
  },

  {
    name: "作品要望",
    href: "/",
    icon: ViewfinderCircleIcon,
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
    className="group relative flex items-center  justify-center space-x-2 rounded-md  p-2 text-xs font-bold md:text-sm md:hover:bg-gray-100"
  >
    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:animate-border md:group-hover:animate-none" />
    <item.icon className={`h-full w-6 ${item.color}`} />
    <Link className="flex flex-1 items-center" href={`${item.href}`}>
      <span className="mt-1 inline-block flex-1">{item.name}</span>
      <ChevronRightIcon className="h-4 w-4 stroke-slate-300 group-hover:stroke-black md:h-6 md:w-6" />
    </Link>
  </li>
));

export const Navigation: FC = () => (
  <nav>
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">{navList}</ul>
  </nav>
);
