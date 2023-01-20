import { Avatar, Button, Indicator } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useUserStore } from "../../../store/user/userState";

export const Header: FC = () => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  return (
    <header className="w-full ">
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
              onClick={() => router.push("/auth/login")}
              size="xs"
              radius="xl"
              classNames={{}}
            >
              ログイン
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
