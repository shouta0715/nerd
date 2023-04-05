import { XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import React, { FC } from "react";
import GoogleIcon from "public/icons/GoogleIcon.svg";
import TwitterIcon from "public/icons/TwitterIcon.svg";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { useGoogleSignIn } from "src/features/auth/hooks/useGoogleSignIn";
import { useGlobalState } from "src/store/global/globalStore";

export const ModalContent: FC = () => {
  const signInGoogle = useGoogleSignIn();
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <div className="flex flex-col  items-center justify-center space-y-3 rounded-md bg-white p-6 shadow-sm md:max-w-md">
      <header className="flex w-full items-center justify-center">
        <Text className="-mr-5 flex flex-1 items-center justify-center font-bold">
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-xl text-transparent md:text-2xl">
            Nerd
          </span>
        </Text>
        <XMarkIcon
          className="h-5 w-5 cursor-pointer"
          onClick={() => changeIsOpenModal(false)}
        />
      </header>
      <Text className="font-medium text-dimmed" component="p" size="sm">
        ログインをすると他の人をフォローしたり、自分の投稿を保存することができます。
        <Link
          className="inline-block text-sm text-indigo-500 underline"
          href="/"
        >
          詳しくはこちら
        </Link>
      </Text>
      <Button
        className="font-hiragino-sans text-sm font-bold"
        leftIcon={<GoogleIcon />}
        onClick={async () => {
          await signInGoogle();
          changeIsOpenModal(false);
        }}
        radius="full"
      >
        Googleでログイン
      </Button>
      <Button
        className="font-hiragino-sans text-sm font-bold"
        leftIcon={<TwitterIcon />}
        radius="full"
      >
        Twitterでログイン
      </Button>
      <Text className="font-medium text-dimmed" size="sm">
        <Link
          className="inline-block text-sm text-indigo-500 underline"
          href="/"
        >
          利用規約
        </Link>
        <Link
          className="inline-block text-sm text-indigo-500 underline"
          href="/"
        >
          プライバシーポリシー
        </Link>
        を確認の上、ご利用ください。
      </Text>
    </div>
  );
};
