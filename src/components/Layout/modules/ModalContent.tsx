import { Button, CloseButton, Text } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { GoogleIcon } from "src/components/Icon/GoogleIcon";
import { Logo } from "src/components/Icon/Logo";
import { TwitterIcon } from "src/components/Icon/TwitterIcon";
import { useGoogleSignIn } from "src/hooks/auth/useGoogleSignIn";
import { useGlobalState } from "src/store/global/globalStore";

export const ModalContent: FC = () => {
  const signInGoogle = useGoogleSignIn();
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <div className="mx-auto flex max-w-md animate-modal  flex-col items-center justify-center space-y-5 rounded-md bg-white p-6 shadow-sm">
      <header className="flex w-full items-center justify-center">
        <Text
          size="lg"
          className="flex flex-1 items-center justify-center font-bold"
        >
          <Logo />
        </Text>
        <CloseButton onClick={() => changeIsOpenModal(false)} />
      </header>
      <Text component="p" color="dimmed" size="sm" className="font-medium">
        ログインをすると他の人をフォローしたり、自分の投稿を保存することができます。
        <Text
          component={Link}
          href="/"
          underline
          size="sm"
          className="inline-block text-indigo-500"
        >
          詳しくはこちら
        </Text>
      </Text>
      <Button
        classNames={{
          label: "font-bold",
        }}
        leftIcon={<GoogleIcon />}
        variant="default"
        color="gray"
        radius="xl"
        onClick={async () => {
          await signInGoogle();
          changeIsOpenModal(false);
        }}
      >
        Googleでログイン
      </Button>
      <Button
        classNames={{
          label: "font-bold",
        }}
        leftIcon={<TwitterIcon />}
        variant="default"
        color="gray"
        radius="xl"
      >
        Twitterでログイン
      </Button>
      <Text color="dimmed" size="sm" className="font-medium">
        <Text
          component={Link}
          href="/"
          underline
          size="sm"
          className="inline-block text-indigo-500"
        >
          利用規約
        </Text>
        <Text
          component={Link}
          href="/"
          underline
          size="sm"
          className="inline-block text-indigo-500"
        >
          プライバシーポリシー
        </Text>
        を確認の上、ご利用ください。
      </Text>
    </div>
  );
};
