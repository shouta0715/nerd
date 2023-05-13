import React from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input";
import { useUserState } from "src/store/user/userState";

export const PostedName = () => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const [name, setName] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) setName("");

    if (user) {
      setUser({
        ...user,
        user_name: name,
      });

      localStorage.setItem("user_name", name);
    }

    setName("");
  };

  return (
    <>
      <p>
        こちらで変更できます。下のフォームに変更したい名前を入力してください。30文字以内でお願いします。
      </p>
      <div className="mt-2">
        <div className="flex text-xs text-dimmed">
          <p className="mr-2">現在の投稿名</p>
          <p className="flex-1">{user ? user.user_name : "匿名"}</p>
        </div>
        <form className="mt-2 flex max-w-md space-x-2" onSubmit={onSubmit}>
          <Input
            className="flex-1 bg-white py-1"
            maxLength={30}
            onChange={(e) => {
              if (e.target.value.length > 30) return;
              setName(e.target.value);
            }}
            type="text"
            value={name}
          />
          <Button
            className={`bg-indigo-500 font-bold text-white ${
              name ? "" : "pointer-events-none opacity-0"
            }`}
            size="xs"
            type="submit"
          >
            変更
          </Button>
        </form>
      </div>
    </>
  );
};
