import {
  ArrowTrendingUpIcon,
  ChevronRightIcon,
  HomeIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC } from "react";
import { ActiveLink } from "src/components/Elements/ActiveLink";
import {
  episodeNavigation,
  generateNavList,
  otherNavigation,
  rankingNavigation,
  systemNavigation,
  worksNavigation,
} from "src/components/Layouts/Nav/gengerate";

export const home = generateNavList({
  name: "ホーム",
  href: "/",
  icon: HomeIcon,
  color: "stroke-gray-600",
});
export const trends = generateNavList({
  name: "トレンド",
  href: "/trends",
  icon: ArrowTrendingUpIcon,
  color: "stroke-gray-600",
});
const episodeNavList = episodeNavigation.map((item) => generateNavList(item));

const worksNavList = worksNavigation.map((item) => generateNavList(item));

const systemNavList = systemNavigation.map((item) => generateNavList(item));

const otherNavList = otherNavigation.map((item) => generateNavList(item));

const rankingNavList = rankingNavigation.map((item) => generateNavList(item));

type Props = {
  notice?: boolean;
};

export const Nav: FC<Props> = ({ notice }) => (
  <nav className="flex h-full flex-col gap-y-7">
    <div className="mt-7 grid gap-y-2">
      {home}
      {trends}
      <ActiveLink
        key="お知らせ"
        activeClassName="text-indigo-600"
        className="group relative flex items-center justify-center rounded-md py-1.5 text-xs hover:text-indigo-600 md:py-2 md:text-sm"
        href="/notice"
      >
        {({ isActive }) => (
          <>
            <span className="relative mr-2">
              <MegaphoneIcon className="h-full w-6 stroke-gray-600" />
              {notice && (
                <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
              )}
            </span>
            <div className="flex h-full flex-1 items-center">
              <span className="inline-block flex-1">お知らせ</span>
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
    </div>
    <div>
      <p className="mb-1 text-sm text-gray-500">エピソード</p>
      <div className="grid gap-y-2">{episodeNavList}</div>
    </div>
    <div>
      <p className="mb-1 text-sm text-gray-500">ランキング</p>
      <div className="grid gap-y-2">{rankingNavList}</div>
    </div>
    <div>
      <p className="mb-1 text-sm text-gray-500">作品</p>
      <div className="grid gap-y-2">{worksNavList}</div>
    </div>

    <div>
      <p className="mb-1 text-sm text-gray-500">システム</p>
      <div className="grid gap-y-2">{systemNavList}</div>
    </div>
    <div className="mt-20">
      <p className="mb-1  text-sm text-gray-500">その他</p>
      <div className="grid gap-y-2">{otherNavList}</div>
    </div>
  </nav>
);
