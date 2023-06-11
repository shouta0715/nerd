import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Image } from "src/components/Elements/Image";
import { Text } from "src/components/Elements/Text";
import { DeleteModal } from "src/components/Modal/Delete";
import { useGoogleSignIn } from "src/features/auth/hooks/useGoogleSignIn";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const AccountMenu = () => {
  const { signOutGoogle } = useGoogleSignIn();
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useGlobalState((state) => [
      state.isDeleteConfirmationOpen,
      state.setIsDeleteConfirmationOpen,
    ]);

  return (
    <>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-30 h-max w-64 rounded-xl border-2 border-slate-200 bg-white shadow-lg ring-1 ring-gray-900/5">
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
            <Popover.Button
              className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
              onClick={() => signOutGoogle()}
            >
              <ArrowRightOnRectangleIcon className="ml-1 h-5 w-5 text-dimmed" />
              <Text className="text-xs" component="span">
                ログアウト
              </Text>
            </Popover.Button>
            <button
              className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
              onClick={() => setIsDeleteConfirmationOpen(true)}
            >
              <TrashIcon className="ml-1 h-5 w-5 text-dimmed" />
              <Text className="text-xs" component="span">
                アカウントの削除
              </Text>
            </button>
          </div>
        </Popover.Panel>
      </Transition>
      <DeleteModal
        onClose={() => setIsDeleteConfirmationOpen(false)}
        open={isDeleteConfirmationOpen}
      />
    </>
  );
};
