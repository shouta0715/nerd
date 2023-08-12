import Link from "next/link";
import React from "react";
import GoogleIcon from "public/icons/GoogleIcon.svg";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { Modal } from "src/components/Modal";
import { useGoogle } from "src/features/auth/hooks/useGoogle";
import { useGlobalState } from "src/store/global/globalStore";

export const AuthModal = () => {
  const [open, setOpen] = useGlobalState((state) => [
    state.isOpenLoginModal,
    state.setIsOpenModal,
  ]);
  const { signInGoogle } = useGoogle();
  const authLoading = useGlobalState((state) => state.authLoading);

  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Modal.Title>
        <span className=" inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text  text-xl text-transparent md:text-2xl">
          Nerd
        </span>
      </Modal.Title>
      <Modal.Content>
        <Text className="font-medium text-dimmed" component="p" size="sm">
          ログインをすると投稿にいいねをつけたり、自分の投稿を保存できます。
        </Text>
        <Button
          className="mx-auto my-6 shadow-md"
          leftIcon={<GoogleIcon />}
          loaderClassName="stroke-indigo-600"
          loading={authLoading}
          onClick={async () => {
            setOpen(false);
            await signInGoogle();
          }}
          radius="full"
        >
          Googleでログイン
        </Button>
        <Text className="font-medium text-dimmed" size="sm">
          <Link
            className="inline-block text-sm text-indigo-500 underline"
            href="/terms"
            onClick={() => setOpen(false)}
          >
            利用規約
          </Link>
          、
          <Link
            className="inline-block text-sm text-indigo-500 underline"
            href="/privacy"
            onClick={() => setOpen(false)}
          >
            プライバシーポリシー
          </Link>
          を確認の上、ご利用ください。
        </Text>
      </Modal.Content>
    </Modal>
  );
};
