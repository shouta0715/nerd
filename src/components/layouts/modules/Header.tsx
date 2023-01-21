import { Avatar, Button, Indicator, Modal } from "@mantine/core";
import Image from "next/image";
import React, { FC, useState } from "react";
import { useUserStore } from "../../../store/user/userState";
import { ModalContent } from "./ModalContent";

export const Header: FC = () => {
  const user = useUserStore((state) => state.user);
  const [opened, setOpened] = useState(false);

  return (
    <header className="w-full ">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="ログイン"
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
        <figure className="relative m-0 h-10 w-20 ">
          <Image
            className="h-full w-full object-contain"
            src="/vercel.svg"
            fill
            alt="icon"
          />
        </figure>
        <div>
          {user && !user.isAnonymous ? (
            <Indicator size={14} offset={5} withBorder color="teal">
              <Avatar
                src={user?.photoURL}
                radius="xl"
                size="md"
                className="cursor-pointer"
              />
            </Indicator>
          ) : (
            <Button
              onClick={() => setOpened((prev) => !prev)}
              size="xs"
              radius="md"
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
