import { ScrollArea, Title } from "@mantine/core";
import React, { FC } from "react";
import { GoogleSignIn } from "../../atom/GoogleSignIn";
import { MailWithPassword } from "../../organism/MailWithPassword";

export const SignIn: FC = () => (
  <ScrollArea className="h-full max-h-full w-full max-w-full rounded-lg bg-white md:h-[800px]  md:w-[700px] md:shadow-2xl">
    <div className="flex h-screen w-screen flex-col items-center justify-center  p-6 md:h-full md:w-full md:p-10">
      <Title order={1}>Login</Title>
      <div className="mt-10">
        <GoogleSignIn />
        <p className="my-10 flex w-full items-center justify-center text-center  text-indigo-500 before:mr-4 before:inline-block before:h-[1px] before:w-[150px] before:bg-indigo-400 before:content-[''] after:ml-4 after:inline-block after:h-[1px] after:w-[150px] after:bg-indigo-400 after:content-['']  ">
          または
        </p>
        <form className="flex flex-col items-center justify-center space-y-8  px-6">
          <MailWithPassword />
        </form>
      </div>
    </div>
  </ScrollArea>
);
