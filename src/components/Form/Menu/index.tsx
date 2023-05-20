import { PencilIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input";
import { Text } from "src/components/Elements/Text";
import { useMenuForm } from "src/components/Form/Menu/useMenuForm";

export const MenuForm = () => {
  const { handleChangeName, register, isChange, user } = useMenuForm();

  return (
    <form className="mb-3 space-y-1" onSubmit={handleChangeName}>
      <label htmlFor="commenter-name-input">
        <div className="flex items-center">
          <PencilIcon className=" h-4 w-4" />
          <Text
            className="min-w-max"
            component="span"
            ff="Hiragino Sans"
            size="xs"
          >
            投稿名の変更
          </Text>
          <Button
            className={`ml-auto min-w-max   transition-transform active:translate-y-0.5 ${
              isChange ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            size="xs"
            theme="primary"
            type="submit"
          >
            変更
          </Button>
        </div>
        {user ? (
          <Text
            className="line-clamp-1 flex-1 text-dimmed"
            component="div"
            ff="Hiragino Sans"
            size="xs"
          >
            現在: {user.user_name}
          </Text>
        ) : (
          <Text className="ml-1 inline-block h-3 w-10 animate-pulse rounded-md bg-slate-200" />
        )}
      </label>
      <Input
        className="py-1 font-hiragino-sans text-[16px]"
        id="commenter-name-input"
        inputSize="xs"
        maxLength={20}
        {...register("username")}
      />
    </form>
  );
};
