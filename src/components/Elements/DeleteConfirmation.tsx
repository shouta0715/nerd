import { Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { useGoogleSignIn } from "src/features/auth/hooks/useGoogleSignIn";

export const DeleteConfirmation = () => {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  const { deleteGoogleUser } = useGoogleSignIn();

  return (
    <>
      <button
        className="flex w-full items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100"
        onClick={() => setIsDeleteConfirmationOpen(!isDeleteConfirmationOpen)}
      >
        <TrashIcon className="ml-1 h-5 w-5 text-dimmed" />
        <Text className="text-xs" component="span" ff="Hiragino Sans">
          アカウントの削除
        </Text>
      </button>
      <Transition
        className="fixed inset-0 z-50 flex place-items-center bg-black/20"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsDeleteConfirmationOpen(false);
          }
        }}
        show={isDeleteConfirmationOpen}
      >
        <Transition.Child
          className="mx-auto  max-w-md rounded-md bg-white p-6"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <p className="flex items-center justify-center font-semibold">
            本当に削除しますか？
          </p>
          <div className="item-center mt-4 flex justify-between">
            <Button
              className="mr-4 rounded-md bg-red-500 px-2 py-1 text-white"
              onClick={deleteGoogleUser}
            >
              削除
            </Button>
            <Button
              className="rounded-md bg-indigo-500 px-2 py-1 text-white"
              onClick={() => setIsDeleteConfirmationOpen(false)}
            >
              キャンセル
            </Button>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};
