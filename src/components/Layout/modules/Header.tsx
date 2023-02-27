import { Avatar, Button } from "@mantine/core";
import React, { FC } from "react";
import { Logo } from "src/components/Icon/Logo";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const Header: FC = () => {
  const user = useUserState((state) => state.user);
  const authLoading = useGlobalState((state) => state.authLoading);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <header className="w-full">
      <div className="container mx-auto flex items-center justify-between px-6 py-2  md:px-10">
        <Logo />
        <div>
          {user && !user.anonymous ? (
            <Avatar
              src={user.photo_url}
              radius="xl"
              size="md"
              className="cursor-pointer"
            />
          ) : (
            <Button
              onClick={() => changeIsOpenModal(true)}
              size="xs"
              radius="md"
              loading={authLoading}
              classNames={{
                label: "font-bold text-sm",
              }}
            >
              ログイン
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
