import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
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
    <header className="w-full bg-white md:border md:border-slate-200">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <Text
              className="my-2 flex-1 text-4xl font-bold  md:text-6xl lg:text-7xl"
              component="h1"
              ff="Hiragino Sans"
            >
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nerd
              </span>
            </Text>
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
          <div>
            <Text
              className="w-md text-base md:py-2 md:text-lg"
              component="p"
              ff="Hiragino Sans"
            >
              アニメ感想共有サイト
              <Text
                className="relative text-base font-semibold  md:text-lg"
                component="span"
                ff="Hiragino Sans"
              >
                Nerd
              </Text>
              へようこそ！
            </Text>
            <Text
              className="text-base md:text-lg"
              component="p"
              ff="Hiragino Sans"
            >
              <span className="inline-block font-semibold">匿名</span>
              または
              <span className="inline-block rounded font-semibold">
                ログイン
              </span>
              して、アニメ感想を投稿しよう！
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
};
