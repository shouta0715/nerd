import { Menu, Transition } from "@headlessui/react";
import {
  BarsArrowUpIcon,
  EllipsisHorizontalIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React, { FC, Fragment } from "react";
import {
  getEpisodeLink,
  getEpisodeQuery,
} from "src/features/episodes/utils/link";
import { getSeriesLink, getSeriesQuery } from "src/features/series/utils/link";
import { Trends } from "src/features/trends/types";
import {
  getWorksLink,
  getWorksQuery,
} from "src/features/works/common/utils/link";

type Props = {
  trend: Trends["trending_chat_episodes"][0];
  index: number;
};

export const Trend: FC<Props> = ({ trend, index }) => {
  return (
    <li className="flex justify-between gap-x-6">
      <Link
        as={getEpisodeLink({
          as: true,
          id: trend.id,
          end_time: trend.end_time,
        })}
        className="flex min-w-0 flex-1 gap-x-4"
        href={{
          pathname: getEpisodeLink({
            as: false,
            id: trend.id,
            end_time: trend.end_time,
          }),
          query: getEpisodeQuery({
            episode: trend,
            title: trend.work.title,
            work_id: trend.work.id,
            series_id: trend.work.series_id,
            today: false,
          }),
        }}
      >
        <div className="min-w-0 flex-auto">
          <div className="flex text-xs font-semibold leading-5 text-gray-500">
            <p className="truncate">
              {index + 1}. トレンド {trend.work.title}
            </p>
          </div>
          <div className="mt-1 text-sm font-semibold leading-6 text-gray-900">
            <p>{trend.title}</p>
          </div>
          <div className="mt-1 flex text-xs leading-5 text-gray-500">
            <p className="truncate">
              <span className="pr-2">{trend.total_count.toLocaleString()}</span>
              件の投稿
            </p>
          </div>
        </div>
      </Link>
      <div className="flex shrink-0">
        <Menu as="div" className="relative flex-none">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon aria-hidden="true" className="h-5 w-5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    as={getWorksLink({
                      id: trend?.work.id,
                      series_id: trend?.work.series_id,
                      as: true,
                    })}
                    className={clsx(
                      active ? "bg-gray-50" : "",
                      "flex items-center gap-x-2 px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                    href={{
                      pathname: getWorksLink({
                        id: trend?.work.id,
                        as: false,
                      }),
                      query: getWorksQuery({
                        series_id: trend?.work.series_id,
                        title: trend?.work.title,
                        series_title: trend?.work.series_title,
                      }),
                    }}
                  >
                    <Square3Stack3DIcon
                      aria-hidden="true"
                      className="h-5 w-5 stroke-black"
                    />
                    他のエピソードを見る
                  </Link>
                )}
              </Menu.Item>
              {trend.work.series_id && (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      as={getSeriesLink({
                        series_id: trend?.work.series_id ?? "",
                      })}
                      className={clsx(
                        active ? "bg-gray-50" : "",
                        "flex items-center gap-x-2 px-3 py-1 text-sm leading-6 text-gray-900"
                      )}
                      href={{
                        pathname: getSeriesLink({
                          series_id: trend?.work.series_id ?? "",
                        }),
                        query: getSeriesQuery({
                          title: trend?.work.title,
                        }),
                      }}
                    >
                      <BarsArrowUpIcon
                        aria-hidden="true"
                        className=" h-5 w-5"
                      />
                      シリーズ一覧へ
                    </Link>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </li>
  );
};
