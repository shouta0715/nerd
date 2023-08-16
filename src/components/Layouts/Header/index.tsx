import { Bars3Icon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Image } from "src/components/Elements/Image";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

const DynamicAccountMenu = dynamic(() =>
  import("src/components/Elements/AccountMenu").then((mod) => mod.AccountMenu)
);

const DynamicPopover = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.Popover)
);

const DynamicPopoverButton = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.Popover.Button)
);

const DynamicSidebar = dynamic(() =>
  import("src/components/Layouts/Sidebar").then((mod) => mod.Sidebar)
);
type Props = {
  notice?: boolean;
};

export const Header: FC<Props> = ({ notice }) => {
  console.log("notice", notice);
  const user = useUserState((state) => state.user);
  const authLoading = useGlobalState((state) => state.authLoading);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);
  const setSidebarOpen = useGlobalState((state) => state.setSidebarOpen);

  return (
    <>
      <header className="shrink-0 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex gap-x-4">
            <button
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
              type="button"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            <Link className="text-3xl font-black sm:text-4xl" href="/">
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nerd
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-x-8">
            {user && !user.anonymous ? (
              <DynamicPopover className="relative">
                <DynamicPopoverButton>
                  {user.isDefaultPhoto ? (
                    <Image
                      alt="avatar"
                      isLoading={authLoading}
                      radius="full"
                      src={user?.photo_url ?? ""}
                    />
                  ) : (
                    <Avatar
                      isLoading={authLoading}
                      user_id={user.id}
                      user_name={user.user_name}
                    />
                  )}
                </DynamicPopoverButton>
                <DynamicAccountMenu />
              </DynamicPopover>
            ) : (
              <Button
                className="px-1.5 py-1 md:px-2 md:py-1.5"
                loading={authLoading}
                onClick={() => changeIsOpenModal(true)}
                radius="md"
                size="sm"
                theme="primary"
              >
                ログイン
              </Button>
            )}
          </div>
        </div>
      </header>
      <DynamicSidebar />
    </>
  );
};
