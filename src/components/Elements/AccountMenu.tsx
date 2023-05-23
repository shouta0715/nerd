import { Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Text } from "src/components/Elements/Text";
import { DeleteModal } from "src/components/Modal/Delete";
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
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  return (
    <>
      <Transition
        className="absolute right-0 z-20 h-max w-64 rounded-md border-2 border-slate-200 bg-white shadow"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={isUserMenuOpen}
      >
        <div className="space-y-2 p-2">
          <div className=" flex space-x-2">
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
            <Text className="mr-2 text-xs" component="p">
              投稿名
            </Text>
            <Text
              className="flex-1 overflow-hidden text-ellipsis text-xs"
              component="p"
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
            <Text className="text-xs" component="span">
              {user?.isDefaultPhoto
                ? "デフォルトの画像に変更"
                : "自分の画像に変更"}
            </Text>
          </button>
          <button
            className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
            onClick={() => {
              signOutGoogle();
              setIsUserMenuOpen(false);
            }}
          >
            <ArrowRightOnRectangleIcon className="ml-1 h-5 w-5 text-dimmed" />
            <Text className="text-xs" component="span">
              ログアウト
            </Text>
          </button>
          <button
            className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
            onClick={() =>
              setIsDeleteConfirmationOpen(!isDeleteConfirmationOpen)
            }
          >
            <TrashIcon className="ml-1 h-5 w-5 text-dimmed" />
            <Text className="text-xs" component="span">
              アカウントの削除
            </Text>
          </button>
        </div>
      </Transition>
      <DeleteModal
        onClose={() => setIsDeleteConfirmationOpen(false)}
        open={isDeleteConfirmationOpen}
      />
    </>
  );
};
