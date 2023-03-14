import { XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { GoogleIcon } from "src/components/Icon/GoogleIcon";
import { Logo } from "src/components/Icon/Logo";
import { TwitterIcon } from "src/components/Icon/TwitterIcon";
import { useGoogleSignIn } from "src/hooks/auth/useGoogleSignIn";
import { useGlobalState } from "src/store/global/globalStore";

export const ModalContent: FC = () => {
  const signInGoogle = useGoogleSignIn();
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <div className="mx-auto flex w-4/5 flex-col  items-center justify-center space-y-5 rounded-md bg-white p-6 shadow-sm md:max-w-md">
      <header className="flex w-full items-center justify-center">
        <Text
          size="lg"
          className="flex flex-1 items-center justify-center font-bold"
        >
          <Logo />
        </Text>
        <XMarkIcon
          className="h-5 w-5 cursor-pointer"
          onClick={() => changeIsOpenModal(false)}
        />
      </header>
      <Text component="p" size="sm" className="font-medium text-dimmed">
        ログインをすると他の人をフォローしたり、自分の投稿を保存することができます。
        <Link
          href="/"
          className="inline-block text-sm text-indigo-500 underline"
        >
          詳しくはこちら
        </Link>
      </Text>
      <Button
        leftIcon={<GoogleIcon />}
        radius="full"
        className="font-hiragino-sans text-sm font-bold"
        onClick={async () => {
          await signInGoogle();
          changeIsOpenModal(false);
        }}
      >
        Googleでログイン
      </Button>
      <Button
        leftIcon={<TwitterIcon />}
        className="font-hiragino-sans text-sm font-bold"
        radius="full"
      >
        Twitterでログイン
      </Button>
      <Text size="sm" className="font-medium text-dimmed">
        <Link
          href="/"
          className="inline-block text-sm text-indigo-500 underline"
        >
          利用規約
        </Link>
        <Link
          href="/"
          className="inline-block text-sm text-indigo-500 underline"
        >
          プライバシーポリシー
        </Link>
        を確認の上、ご利用ください。
      </Text>
    </div>
  );
};
