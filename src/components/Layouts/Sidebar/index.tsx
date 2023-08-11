import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";
import { ActiveLink } from "src/components/Elements/ActiveLink";
import { useGlobalState } from "src/store/global/globalStore";
import { navigation } from "src/utils/client/navData";

const DynamicSearchWorksForm = dynamic(() =>
  import("src/features/works/search/components/SearchWorksForm").then(
    (mod) => mod.SearchWorksForm
  )
);

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useGlobalState((state) => [
    state.sidebarOpen,
    state.setSidebarOpen,
  ]);

  return (
    <>
      {/* Mobile Style */}
      <Transition.Root as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                      type="button"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <Link className="text-3xl font-black" href="/">
                      <span className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        Nerd
                      </span>
                    </Link>
                  </div>
                  <DynamicSearchWorksForm />
                  <nav className="flex flex-1 flex-col">
                    <ul className="-mx-2 space-y-3">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <ActiveLink
                            activeClassName="bg-gray-50 text-indigo-600"
                            className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                            href={item.href}
                            onTransitionComplete={() => setSidebarOpen(false)}
                          >
                            {({ isActive }) => (
                              <>
                                <item.icon
                                  aria-hidden="true"
                                  className={clsx(
                                    "h-6 w-6 shrink-0",
                                    isActive
                                      ? "text-indigo-600"
                                      : "text-gray-400 group-hover:text-indigo-600",
                                    item.color
                                  )}
                                />
                                {item.name}
                              </>
                            )}
                          </ActiveLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};