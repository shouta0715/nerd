import {
  LightBulbIcon,
  RocketLaunchIcon,
  RssIcon,
  TrophyIcon,
  ViewfinderCircleIcon,
  WindowIcon,
  ChevronRightIcon,
  KeyIcon,
  NewspaperIcon,
  AcademicCapIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import BeginnerIcon from "public/icons/BeginnerIcon.svg";
import { ActiveLink } from "src/components/Elements/ActiveLink";

export const episodeNavigation = [
  {
    name: "今日のアニメ",
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
];

export const worksNavigation = [
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
    name: "おすすめのアニメ",
    href: "/recommend",
    icon: HeartIcon,
    color: "stroke-pink-600",
  },
];

export const systemNavigation = [
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

export const otherNavigation = [
  {
    name: "プライバシーポリシー",
    href: "/privacy",
    icon: KeyIcon,
    color: "stroke-gray-600",
  },
  {
    name: "利用規約",
    href: "/terms",
    icon: NewspaperIcon,
    color: "stroke-gray-600",
  },
  {
    name: "サイトについて",
    href: "/about",
    icon: AcademicCapIcon,
    color: "stroke-gray-600",
  },
];

export const generateSliderNavigation = <T extends typeof episodeNavigation>({
  item,
  onTransitionComplete,
}: {
  item: T extends (infer R)[] ? R : never;
  onTransitionComplete: () => void;
}) => {
  return (
    <li key={item.name}>
      <ActiveLink
        activeClassName="bg-gray-50 text-indigo-600"
        className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
        href={item.href}
        onTransitionComplete={onTransitionComplete}
      >
        {() => (
          <>
            <item.icon className={clsx("mr-2 h-full w-6", item.color)} />
            {item.name}
          </>
        )}
      </ActiveLink>
    </li>
  );
};

export const generateNavList = <T extends typeof episodeNavigation>(
  item: T extends (infer U)[] ? U : never
) => {
  return (
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
  );
};
