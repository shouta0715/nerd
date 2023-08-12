import { HomeIcon } from "@heroicons/react/24/outline";
import {
  episodeNavigation,
  generateNavList,
  otherNavigation,
  systemNavigation,
  worksNavigation,
} from "src/components/Layouts/Nav/gengerate";

export const home = generateNavList({
  name: "ホーム",
  href: "/",
  icon: HomeIcon,
  color: "stroke-gray-600",
});
const episodeNavList = episodeNavigation.map((item) => generateNavList(item));

const worksNavList = worksNavigation.map((item) => generateNavList(item));

const systemNavList = systemNavigation.map((item) => generateNavList(item));

const otherNavList = otherNavigation.map((item) => generateNavList(item));

export const Nav = () => (
  <nav className="flex flex-1 flex-col gap-y-7">
    <div className="mt-3">{home}</div>
    <div>
      <p className="mb-1 text-sm text-gray-500">エピソード</p>
      <div className="grid gap-2">{episodeNavList}</div>
    </div>
    <div>
      <p className="mb-1 text-sm text-gray-500">作品</p>
      <div className="grid gap-2">{worksNavList}</div>
    </div>
    <div>
      <p className="mb-1 text-sm text-gray-500">システム</p>
      <div className="grid gap-2">{systemNavList}</div>
    </div>
    <div className="mt-auto">
      <p className="mb-1  text-sm text-gray-500">その他</p>
      <div className="grid gap-2">{otherNavList}</div>
    </div>
  </nav>
);
