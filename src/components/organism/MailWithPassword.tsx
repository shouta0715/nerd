import { Autocomplete, Button, PasswordInput } from "@mantine/core";
import React, { FC } from "react";
import { useEmailSignIn } from "../../hooks/auth/useEmailSignIn";
import { useUserAuthInputStore } from "../../store/user/userState";

export const MailWithPassword: FC = () => {
  const { handleSubmit } = useEmailSignIn();
  const emailWithPassword = useUserAuthInputStore(
    (state) => state.emailWithPassword
  );

  const setEmailWithPassword = useUserAuthInputStore(
    (state) => state.setEmailWithPassword
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-8  px-6"
    >
      <Autocomplete
        placeholder="メールアドレスを入力してください"
        label="メールアドレス"
        classNames={{
          input: "rounded-md w-[250px] py-1",
          label: "mb-2 pl-1 font-semibold",
        }}
        value={emailWithPassword.email}
        onChange={(inputValue) =>
          setEmailWithPassword({
            ...emailWithPassword,
            email: inputValue,
          })
        }
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
        value={emailWithPassword.password}
        onChange={(e) =>
          setEmailWithPassword({
            ...emailWithPassword,
            password: e.target.value,
          })
        }
      />
      <Button type="submit" className="w-[250px]">
        ログイン
      </Button>
    </form>
  );
};
