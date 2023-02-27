import { Button, Text } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { GoogleIcon } from "src/components/Icon/GoogleIcon";
import { TwitterIcon } from "src/components/Icon/TwitterIcon";
import { useGoogleSignIn } from "src/hooks/auth/useGoogleSignIn";
import { useGlobalState } from "src/store/global/globalStore";

export const ModalContent: FC = () => {
  const signInGoogle = useGoogleSignIn();
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-4">
      <Text color="dimmed" size="sm" className="font-medium">
        ログインをすると他の人をフォローしたり、自分の投稿を保存することができます。
        <Link href="/">
          <Text underline size="sm" className="inline-block text-indigo-500">
            詳しくはこちら
          </Text>
        </Link>
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
        <Link href="/">
          <Text underline size="sm" className="inline-block text-indigo-500">
            利用規約
          </Text>
        </Link>
        、
        <Link href="/">
          <Text underline size="sm" className="inline-block text-indigo-500">
            プライバシーポリシー
          </Text>
        </Link>
        を確認の上、ご利用ください。
      </Text>
    </div>
  );
};
