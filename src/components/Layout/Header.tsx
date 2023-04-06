import { Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { useGoogleSignIn } from "src/features/auth/hooks/useGoogleSignIn";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

const DynamicAvatar = dynamic(() =>
  import("src/components/Elements/Avatar").then((mod) => mod.Avatar)
);

const DynamicModal = dynamic(() =>
  import("src/components/Elements/Modal").then((mod) => mod.Modal)
);

export const Header: FC = () => {
  const user = useUserState((state) => state.user);
  const authLoading = useGlobalState((state) => state.authLoading);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const { signOutGoogle } = useGoogleSignIn();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white md:border md:border-slate-200 md:pb-2">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <Link
              className="my-2 inline-block font-hiragino-sans text-3xl font-bold"
              href="/"
            >
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nerd
              </span>
            </Link>
            <div className="order-1 flex items-center justify-between">
              {user && !user.anonymous ? (
                <div ref={elementRef} className="relative">
                  <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                    <DynamicAvatar
                      user_id={user.id}
                      user_name={user.user_name}
                    />
                  </button>
                  <Transition
                    className="absolute right-0 z-10 w-64 rounded-md border-2 border-slate-200 bg-white shadow"
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    show={isUserMenuOpen}
                  >
                    <div className="space-y-2 p-2">
                      <div className="flex space-x-2 font-hiragino-sans">
                        <figure className="relative aspect-square">
                          <Image
                            alt="avatar"
                            className="rounded-full object-contain"
                            height={28}
                            src={user.photo_url ?? ""}
                            width={28}
                          />
                        </figure>
                        <span className="w-[calc(100%-44px)] self-center break-words text-sm font-semibold">
                          {user.provider_user_name}
                        </span>
                      </div>
                      <p className="text-sm text-dimmed">
                        <Text className="mr-2 w-6 text-xs" component="span">
                          投稿名
                        </Text>
                        <Text
                          className="font-hiragino-sans text-xs"
                          component="span"
                          ff="Hiragino Sans"
                          size="sm"
                        >
                          {user.user_name}
                        </Text>
                      </p>
                    </div>
                    <div className="border-t border-slate-200">
                      <Link
                        className="flex items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-50"
                        href="/"
                      >
                        <Cog8ToothIcon className="ml-1 h-5 w-5 text-dimmed" />
                        <Text
                          className="text-xs"
                          component="span"
                          ff="Hiragino Sans"
                        >
                          アカウント設定
                        </Text>
                      </Link>

                      <button
                        className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
                        onClick={signOutGoogle}
                      >
                        <ArrowRightOnRectangleIcon className="ml-1 h-5 w-5 text-dimmed" />
                        <Text
                          className="text-xs"
                          component="span"
                          ff="Hiragino Sans"
                        >
                          ログアウト
                        </Text>
                      </button>
                    </div>
                  </Transition>
                </div>
              ) : (
                <>
                  <Button
                    className="btn-primary text-sm"
                    loading={authLoading}
                    onClick={() => changeIsOpenModal(true)}
                    radius="md"
                    size="xs"
                  >
                    ログイン
                  </Button>
                  <DynamicModal />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
