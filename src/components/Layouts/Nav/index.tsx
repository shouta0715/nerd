import {
  ChevronRightIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  RssIcon,
  ViewfinderCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import BeginnerIcon from "public/icons/BeginnerIcon.svg";

const mockNavigation = [
  {
    name: "今日放送",
    href: "/list/today",
    icon: RssIcon,
    color: " stroke-blue-500",
  },
  {
    name: "今期のアニメ",
    href: "/list/season",
    icon: RocketLaunchIcon,
    color: " stroke-red-500",
  },
  {
    name: "今週のアニメ",
    href: "/list/weekly",
    icon: WindowIcon,
    color: " stroke-purple-500",
  },
  {
    name: "作品要望",
    href: "/request",
    icon: ViewfinderCircleIcon,
    color: "stroke-pink-500",
  },
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
    color: "stroke-amber-500",
  },
];

const navList = mockNavigation.map((item) => (
  <Link
    key={item.name}
    className=" group relative flex  items-center justify-center rounded-md px-2 py-1.5 text-xs hover:text-indigo-500 md:py-2 md:text-sm"
    href={`${item.href}`}
  >
    <div className="absolute bottom-0 left-0 h-[1px] w-0" />
    <item.icon className={`mr-2 h-full w-6 ${item.color}`} />
    <div className="flex h-full flex-1 items-center">
      <span className="inline-block flex-1">{item.name}</span>
      <ChevronRightIcon className=" h-4 w-4 stroke-slate-300 group-hover:stroke-indigo-500 md:h-6 md:w-6" />
    </div>
  </Link>
));

export const Nav = () => (
  <nav>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-1">{navList}</div>
  </nav>
);
