import React from "react";
import { Button } from "src/components/Elements/Button";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const LoginMeaning = () => {
  const user = useUserState((state) => state.user);
  const { authLoading, changeIsOpenModal } = useGlobalState((state) => ({
    authLoading: state.authLoading,
    changeIsOpenModal: state.setIsOpenModal,
  }));

  return (
    <>
      <p>
        コメントにいいねをつけることができます。また、自分のログインしたアカウントの画像を表示することができます
      </p>
      <Button
        className={`mt-2 text-sm ${user?.anonymous ? "" : "hidden"}`}
        loading={authLoading}
        onClick={() => changeIsOpenModal(true)}
        radius="md"
        size="sm"
        theme="primary"
      >
        ログイン
      </Button>
    </>
  );
};
