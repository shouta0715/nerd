import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { FC, Fragment } from "react";
import {
  getStatusColor,
  getStatusIcon,
  getStatusIconColor,
  getStatusListLabel,
} from "src/features/request/history/utils";
import { GetRequestByStatusQuery, GetRequestsQuery } from "src/gql/graphql";

type Props = {
  request:
    | GetRequestsQuery["request_works"][0]
    | GetRequestByStatusQuery["request_works"][0];
};

export const HistoryList: FC<Props> = ({ request }) => {
  const Icon = getStatusIcon()[request.approval_status];

  return (
    <li className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5  p-6">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-lg bg-white ring-1 ring-gray-900/10">
          <Icon
            className={clsx(
              getStatusIconColor()[request.approval_status],
              "h-10 w-10 rounded-lg"
            )}
          />
        </div>
        <div className="text-sm font-medium leading-6 text-gray-900">
          {request.work_title}
        </div>
        <Menu as="div" className="relative ml-auto">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
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
            <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={clsx(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    消去<span className="sr-only">, {request.work_title}</span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">最終更新日</dt>
          <dd className="text-gray-700">
            <time dateTime={request.updated_at}>
              {new Date(request.updated_at).toLocaleDateString()}
            </time>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">ステータス</dt>
          <dd className="flex items-start gap-x-2">
            <div
              className={clsx(
                getStatusColor()[request.approval_status],
                "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
              )}
            >
              {getStatusListLabel(request.approval_status)}
            </div>
          </dd>
        </div>
      </dl>
    </li>
  );
};
