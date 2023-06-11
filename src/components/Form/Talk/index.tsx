import {
  AdjustmentsHorizontalIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Image } from "src/components/Elements/Image";
import { Loader } from "src/components/Elements/Loader";
import { TextArea } from "src/components/Elements/TextArea";
import { useTalkForm } from "src/components/Form/Talk/useTalkForm";

type Props = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  disabled?: boolean;
  value: string;
  placeholder: string;
  ref?: React.RefObject<HTMLTextAreaElement> | null;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validLength?: number;
};

export const TalkForm: FC<Props> = ({
  onSubmitHandler,
  isLoading,
  disabled,
  value,
  placeholder,
  ref,
  onBlur,
  onChange,
  validLength = 100,
}) => {
  const {
    onHandleKeyDown,
    setIsOpenModal,
    isMenuOpen,
    setIsMenuOpen,
    setUser,
    authLoading,
    user,
  } = useTalkForm(isLoading);

  const apiLoading = isLoading || authLoading;

  const { length } = value ?? "";

  const loading =
    length === 0 || length > validLength || apiLoading || disabled;

  return (
    <form
      className="flex items-center justify-center gap-4  lg:flex-col lg:items-stretch lg:justify-between"
      onSubmit={onSubmitHandler}
    >
      <button
        className="flex items-center gap-4"
        onClick={() => {
          if (user?.anonymous) setIsOpenModal(true);

          if (!user?.anonymous && user)
            setUser({ ...user, isDefaultPhoto: !user.isDefaultPhoto });
        }}
        type="button"
      >
        {user?.isDefaultPhoto ? (
          <Image
            alt="avatar"
            height={38}
            isLoading={authLoading}
            src={user?.photo_url ?? ""}
            width={38}
          />
        ) : (
          <Avatar
            isLoading={authLoading}
            user_id={user?.id ?? ""}
            user_name={user?.user_name ?? ""}
          />
        )}
        {user && <span className="hidden lg:block">{user.user_name}</span>}
      </button>

      <div className="relative flex flex-1 items-center">
        <TextArea
          ref={ref}
          aria-label="コメントを入力"
          className="placeholder: w-full flex-1 resize-none appearance-none rounded-md border border-gray-300  px-4 py-2 pr-10 placeholder:pt-1 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:border-pink-500 disabled:bg-white lg:mr-4"
          disabled={authLoading || disabled}
          maxLength={validLength}
          maxRows={4}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onHandleKeyDown}
          placeholder={placeholder}
          value={value}
        />
        <Button
          className="hidden h-9 w-9 place-items-center rounded-full bg-teal-500 p-0 lg:grid"
          disabled={loading}
          type="submit"
        >
          {apiLoading ? (
            <Loader size="md" theme="white" />
          ) : (
            <PaperAirplaneIcon className="h-full w-full fill-white stroke-white" />
          )}
        </Button>
        <div className="absolute right-2 flex flex-col ">
          <div
            className={clsx(
              "ml-1 text-xs transition-opacity",
              length === validLength ? "text-red-400" : "text-gray-500",
              length < 50 ? "opacity-0" : "opacity-100"
            )}
          >
            {length > 50 && length.toString()}
          </div>
          <Button
            className="h-8 w-8 rounded-full border-none bg-teal-500 p-0 active:translate-y-0 disabled:opacity-100 lg:hidden"
            disabled={loading}
            type="submit"
          >
            {apiLoading ? (
              <Loader size="md" theme="white" />
            ) : (
              <PaperAirplaneIcon className="h-full w-full fill-white stroke-white" />
            )}
          </Button>
        </div>
      </div>

      <button
        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        className="h-6 w-6 cursor-pointer transition-transform active:translate-y-0.5 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AdjustmentsHorizontalIcon />
      </button>
    </form>
  );
};
