import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
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

  return (
    <header className="w-full bg-white md:border md:border-slate-200 md:pb-2">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <Link
              className="my-2 flex-1 font-hiragino-sans text-3xl font-bold"
              href="/"
            >
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nerd
              </span>
            </Link>
            <div className="order-1 flex items-center justify-between">
              {user && !user.anonymous ? (
                <DynamicAvatar user_id={user.id} user_name={user.user_name} />
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
