import { CloseButton, ScrollArea, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";

import { GoogleSignIn } from "../../atom/GoogleSignIn";
import { MailWithPassword } from "../../molecules/auth/MailWithPassword";

export const SignIn: FC = () => (
  <ScrollArea className="h-screen max-h-full w-screen max-w-full rounded-lg bg-white md:h-[800px]  md:w-[700px] md:shadow-2xl">
    <div className="relative flex h-full min-h-screen w-screen flex-col items-center  justify-center  p-6 md:h-[800px] md:min-h-0  md:w-[700px] md:p-10">
      <Link
        href="/"
        className="relative -left-[calc(50%-40px)] rounded-full md:absolute  md:left-10  md:top-10"
      >
        <CloseButton
          aria-label="Close modal"
          size="xl"
          color="green"
          radius="xl"
          variant="light"
        />
      </Link>
      <Title order={1}>Login</Title>
      <div className="mt-10">
        <GoogleSignIn />
        <p className="my-10 flex w-full items-center justify-center text-center  text-sm text-indigo-500 before:mr-4 before:inline-block before:h-[1px] before:w-[120px] before:bg-indigo-400 before:content-[''] after:ml-4 after:inline-block after:h-[1px] after:w-[120px] after:bg-indigo-400 after:content-[''] md:text-base md:before:w-[150px] md:after:w-[150px]  ">
          または
        </p>
        <MailWithPassword />
      </div>
    </div>
  </ScrollArea>
);
