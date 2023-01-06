import { Autocomplete, Button, PasswordInput } from "@mantine/core";
import React, { FC } from "react";

export const MailWithPassword: FC = () => (
  <>
    <Autocomplete
      placeholder="メールアドレスを入力してください"
      label="メールアドレス"
      classNames={{
        input: "rounded-md w-[250px] py-1",
        label: "mb-2 pl-1 font-semibold",
      }}
      withAsterisk
      data={[]}
    />
    <PasswordInput
      classNames={{
        input: "rounded-md w-[250px] py-1 font-semibold",
      }}
      placeholder="Password"
      label="Password"
      withAsterisk
    />
    <Button type="submit" className="w-[250px]">
      ログイン
    </Button>
  </>
);
