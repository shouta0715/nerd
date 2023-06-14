import React from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input";
import { useMenuForm } from "src/components/Form/Menu/useMenuForm";

export const PostedName = () => {
  const { register, handleSubmit, onInValid, onValid, isChange, user } =
    useMenuForm();

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
        <form
          className="mt-2 flex max-w-md gap-2"
          onSubmit={handleSubmit(onValid, onInValid)}
        >
          <Input className="flex-1 bg-white py-1" {...register("username")} />
          <Button
            className="bg-indigo-500 font-bold text-white"
            disabled={!isChange}
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
