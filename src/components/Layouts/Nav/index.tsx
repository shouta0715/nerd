import {
  ChevronRightIcon,
  HomeIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  RssIcon,
  TrophyIcon,
  ViewfinderCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import BeginnerIcon from "public/icons/BeginnerIcon.svg";
import { ActiveLink } from "src/components/Elements/ActiveLink";

export const navigation = [
  {
    name: "ホーム",
    href: "/",
    icon: HomeIcon,
    color: "stroke-gray-600",
  },
  {
    name: "今日放送",
    href: "/list/today",
    icon: RssIcon,
    color: "stroke-blue-600",
  },
  {
    name: "今期のアニメ",
    href: "/list/season",
    icon: RocketLaunchIcon,
    color: "stroke-red-600",
  },
  {
    name: "今週のアニメ",
    href: "/list/weekly",
    icon: WindowIcon,
    color: "stroke-purple-600",
  },
  {
    name: "ランキング",
    href: "/ranking",
    icon: TrophyIcon,
    color: "stroke-amber-600",
  },
  {
    name: "作品要望",
    href: "/request",
    icon: ViewfinderCircleIcon,
    color: "stroke-pink-600",
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
    color: "stroke-amber-600",
  },
];

const navList = navigation.map((item) => (
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

export const Nav = () => (
  <nav>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-1">{navList}</div>
  </nav>
);
