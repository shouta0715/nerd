import { Avatar, Button, Modal } from "@mantine/core";
import React, { FC, useState } from "react";
import { Logo } from "src/components/Icon/Logo";
import { ModalContent } from "src/components/Layout/modules/ModalContent";
import { useGlobalStore } from "src/store/global/globalStore";
import { useUserStore } from "src/store/user/userState";

export const Header: FC = () => {
  const user = useUserStore((state) => state.user);
  const [opened, setOpened] = useState(false);
  const authLoading = useGlobalStore((state) => state.authLoading);

  return (
    <header className="w-full ">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Logo />}
        classNames={{
          title: "text-2xl font-bold mx-auto",
          overlay: "bg-gray-900 bg-opacity-50",
        }}
        centered
        radius="md"
      >
        <ModalContent setOpened={setOpened} />
      </Modal>
      <div className="flex items-center justify-between px-6 py-2  md:px-10">
        <Logo />
        <div>
          {user && !user.anonymous ? (
            <Avatar
              src={user?.photo_url}
              radius="xl"
              size="md"
              className="cursor-pointer"
            />
          ) : (
            <Button
              onClick={() => setOpened((prev) => !prev)}
              size="xs"
              radius="md"
              className={` transition-opacity duration-[250ms] ${
                authLoading ? "pointer-events-none opacity-0" : "opacity-100"
              } `}
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
