import { Text } from "@mantine/core";
import Image from "next/image";
import React, { FC } from "react";

export const GoogleSignIn: FC = () => (
  <figure className="mx-auto flex w-[250px] cursor-pointer items-center justify-center space-x-4 rounded-full border border-solid border-gray-400 py-1 px-6">
    <Image
      className="!relative !h-8 !w-8	object-cover"
      src="/Google.png"
      alt=""
      fill
    />
    <Text fw="bold">SignIn With Google</Text>
  </figure>
);
