import {
  Cog8ToothIcon,
  DocumentArrowUpIcon,
  RocketLaunchIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";
import { BeginnerIcon } from "src/components/Icon/BeginnerIcon";

const mockNavigation = [
  {
    name: "今日放送",
    href: "/list/todayEpisodes",
    icon: TvIcon,
  },
  {
    name: "今期",
    href: "/list/thisSeason",
    icon: RocketLaunchIcon,
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
];

const navList = mockNavigation.map((item) => (
  <li key={item.name} className="text-xs">
    <Link className="flex flex-col items-center" href={`${item.href}`}>
      <item.icon className="h-6 w-6" />
      <span className="mt-1 inline-block">{item.name}</span>
    </Link>
  </li>
));

export const Navigation: FC = () => (
  <nav>
    <ul className="grid grid-cols-3 gap-4 md:grid-cols-2">{navList}</ul>
  </nav>
);
