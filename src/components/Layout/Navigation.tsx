import {
  ChevronRightIcon,
  Cog8ToothIcon,
  RocketLaunchIcon,
  RssIcon,
  ViewfinderCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { FC } from "react";
import BeginnerIcon from "public/icons/BeginnerIcon.svg";

const mockNavigation = [
  {
    name: "今日放送",
    href: "/list/todayEpisodes",
    icon: RssIcon,
    color: " stroke-blue-500",
  },
  {
    name: "今期のアニメ",
    href: "/list/seasonWorks",
    icon: RocketLaunchIcon,
    color: " stroke-red-500",
  },
  {
    name: "今週のアニメ",
    href: "/list/weeklyWorks",
    icon: WindowIcon,
    color: " stroke-purple-500",
  },
  {
    name: "作品要望",
    href: "/",
    icon: ViewfinderCircleIcon,
    color: "stroke-pink-500",
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
    color: "fill-green-700",
  },
];

const navList = mockNavigation.map((item) => (
  <li
    key={item.name}
    className="group relative flex items-center  justify-center rounded-md  px-2 py-1.5 text-xs font-bold hover:bg-gray-100 md:py-2 md:text-sm"
  >
    <div className="absolute bottom-0 left-0 h-[1px] w-0" />
    <item.icon className={`mr-2 h-full w-6 ${item.color}`} />
    <Link className="flex h-full flex-1 items-center" href={`${item.href}`}>
      <span className="inline-block flex-1">{item.name}</span>
      <ChevronRightIcon className="h-4 w-4 stroke-slate-300 group-hover:stroke-black md:h-6 md:w-6" />
    </Link>
  </li>
));

export const Navigation: FC = () => (
  <nav>
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">{navList}</ul>
  </nav>
);
