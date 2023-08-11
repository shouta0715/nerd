import {
  HomeIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  RssIcon,
  TrophyIcon,
  ViewfinderCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import BeginnerIcon from "public/icons/BeginnerIcon.svg";

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
