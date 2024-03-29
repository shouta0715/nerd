import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Modal } from "src/components/Modal";
import { useGoogle } from "src/features/auth/hooks/useGoogle";
import { useRecentLoginState } from "src/features/auth/store";
import { useGlobalState } from "src/store/global/globalStore";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const DeleteModal: FC<Props> = ({ open, onClose }) => {
  const { deleteGoogleUser, reAuthDeleteGoogleUser } = useGoogle();
  const isReAuth = useRecentLoginState((state) => state.isRequired);
  const authLoading = useGlobalState((state) => state.authLoading);

  return (
    <Modal onClose={onClose} open={open}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-6 w-6 text-red-600"
          />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Modal.Title className="text-center text-base font-semibold leading-6 text-gray-900 sm:text-left">
            アカウントの消去
          </Modal.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              アカウントを消去しても、コメントは残りますが、自分の投稿として表示されなくなります。
              本当にアカウントを消去してよろしいですか？
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          loading={authLoading}
          onClick={isReAuth ? reAuthDeleteGoogleUser : deleteGoogleUser}
          type="button"
        >
          {isReAuth ? "再認証して消去" : "消去する"}
        </Button>
        <button
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onClose}
          type="button"
        >
          キャンセル
        </button>
      </div>
    </Modal>
  );
};
