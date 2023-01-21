import { Anchor, Button, Paper, Text } from "@mantine/core";
import Link from "next/link";
import React, { Dispatch, FC, memo } from "react";
import { useGoogleSignIn } from "../../../hooks/auth/useGoogleSignIn";
import { GoogleIcon } from "../../Icon/GoogleIcon";
import { TwitterIcon } from "../../Icon/TwitterIcon";

type Props = {
  setOpened: Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContent: FC<Props> = memo(({ setOpened }) => {
  const signInGoogle = useGoogleSignIn();

  return (
    <Paper className="flex flex-col items-center justify-center space-y-6 px-4">
      <Text color="dimmed" size="sm" className="font-medium">
        ログインをすると他の人をフォローしたり、自分の投稿を保存することができます。
        <Link href="/">
          <Anchor underline size="sm">
            詳しくはこちら
          </Anchor>
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
          setOpened(false);
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
          <Anchor size="sm" underline>
            利用規約
          </Anchor>
          、
          <Anchor size="sm" underline>
            プライバシーポリシー
          </Anchor>
          を確認の上、ご利用ください。
        </Link>
      </Text>
    </Paper>
  );
});
