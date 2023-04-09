import { Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { useGoogleSignIn } from "src/features/auth/hooks/useGoogleSignIn";
import { useUserState } from "src/store/user/userState";

type Props = {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AccountMenu: FC<Props> = ({
  isUserMenuOpen,
  setIsUserMenuOpen,
}) => {
  const { signOutGoogle } = useGoogleSignIn();
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);

  return (
    <Transition
      className="absolute right-0 z-20 w-64 rounded-md border-2 border-slate-200 bg-white shadow"
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
              src={user?.photo_url ?? ""}
              width={28}
            />
          </figure>
          <span className="w-[calc(100%-44px)] self-center break-words text-sm font-semibold">
            {user?.provider_user_name}
          </span>
        </div>

        <div className="flex items-center text-dimmed ">
          <Text className="mr-2 text-xs" component="p" ff="Hiragino Sans">
            投稿名
          </Text>
          <Text
            className="flex-1 overflow-hidden text-ellipsis text-xs"
            component="p"
            ff="Hiragino Sans"
          >
            {user?.user_name}
          </Text>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <button
          className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
          onClick={() => {
            if (user) {
              setUser({ ...user, isDefaultPhoto: !user.isDefaultPhoto });
            }
          }}
        >
          <ArrowPathIcon className="ml-1 h-5 w-5 text-dimmed" />
          <Text className="text-xs" component="span" ff="Hiragino Sans">
            {user?.isDefaultPhoto
              ? "デフォルトの画像に変更"
              : "自分の画像に変更"}
          </Text>
        </button>
        <Link
          className="flex items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-50"
          href={`/${user?.id}/setting`}
        >
          <Cog8ToothIcon className="ml-1 h-5 w-5 text-dimmed" />
          <Text className="text-xs" component="span" ff="Hiragino Sans">
            アカウント設定
          </Text>
        </Link>

        <button
          className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
          onClick={() => {
            signOutGoogle();
            setIsUserMenuOpen(false);
          }}
        >
          <ArrowRightOnRectangleIcon className="ml-1 h-5 w-5 text-dimmed" />
          <Text className="text-xs" component="span" ff="Hiragino Sans">
            ログアウト
          </Text>
        </button>
      </div>
    </Transition>
  );
};
