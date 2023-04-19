/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import RotateArrowRightIcon from "public/icons/RotateArrowRightIcon.svg";
import { Button } from "src/components/Elements/Button";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Input } from "src/components/Elements/Input/Input";
import { Text } from "src/components/Elements/Text";
import { useMenu } from "src/features/episodes/hooks/useMenu";

type Props = {
  series_id?: string | null;
  series_title?: string | null;
};

export const WorkMenu: FC<Props> = ({ series_id, series_title }) => {
  const {
    isMenuOpen,
    time,
    setIsMenuOpen,
    onSubmitHandler,
    setInputValue,
    user,
    padTime,
    inputValue,
    interval,
    uuid,
    handleChange,
    changeTenTime,
    onSubmitChangeTime,
    isChangeTime,
    inputTime,
  } = useMenu();

  return (
    <div
      className={`fixed inset-0 z-50 place-items-center bg-black/40 lg:contents ${
        isMenuOpen ? "flex" : "hidden"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsMenuOpen(false);
      }}
    >
      <div
        className={`mx-auto h-max max-h-[90vh] w-4/5 max-w-md animate-modal overflow-y-auto rounded-md  border border-solid border-slate-100 bg-white shadow lg:static lg:mx-0 lg:h-auto lg:max-h-fit  lg:w-full lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:animate-none lg:border-0 lg:shadow-none lg:transition-none ${
          isMenuOpen ? "block" : "  hidden lg:block"
        }`}
      >
        <section className="px-4 py-2">
          <div className="mb-2 flex items-center justify-between">
            <Text className="text-dimmed" size="sm">
              メニュー
            </Text>
            <XMarkIcon
              aria-label="Close modal"
              className="h-4 w-4 cursor-pointer text-dimmed lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <form className="mb-3 space-y-1" onSubmit={onSubmitHandler}>
            <label className="flex items-center" htmlFor="commenter-name-input">
              <PencilIcon className="mr-1 h-4 w-4" />
              <Text className="text-xs" component="span">
                投稿名の変更
              </Text>
              <Button
                className={`ml-auto rounded bg-indigo-500 px-2 py-1 text-xs font-bold text-white transition-transform active:translate-y-0.5 ${
                  inputValue === user?.user_name || !inputValue.trim()
                    ? "pointer-events-none opacity-0"
                    : "opacity-100"
                }`}
                onClick={() => {
                  if (!inputValue.trim()) setInputValue(user?.user_name ?? "");
                }}
                type="submit"
              >
                変更
              </Button>
            </label>
            <Input
              className="py-1 font-hiragino-sans"
              id="commenter-name-input"
              inputSize="xs"
              maxLength={30}
              onBlur={() => {
                if (!inputValue.trim()) setInputValue(user?.user_name ?? "");
              }}
              onChange={(e) => {
                if (e.target.value.length > 30) return;
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
          </form>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex">
              <Text className="text-indigo-500" size="sm">
                開始から
              </Text>
              <div className="relative bg-red-500">
                <QuestionMarkCircleIcon className="peer -mr-8 ml-2 h-6 w-6 text-gray-500" />
                <div className="absolute -left-7 bottom-8 w-24  rounded bg-black p-1 text-xs text-white opacity-0  shadow transition-opacity  before:absolute  before:left-1/2 before:top-full before:h-0   before:w-0  before:-translate-x-1/2 before:border-b-0 before:border-l-[6px] before:border-r-[6px] before:border-t-[6px] before:border-solid before:border-black before:border-x-transparent before:content-[''] peer-hover:opacity-100">
                  下の数字をタップすると時間を変更できます。
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <div className=" w-full">
                {inputTime
                  ? inputTime.split("").map((digit, index) => (
                      <input
                        key={`${uuid}-${index}`}
                        className=" inline-block h-8 w-8 rounded-sm border border-slate-200 text-center font-futura text-[16px] first:!ml-0 odd:ml-5 odd:mr-2 "
                        id={`${uuid}-${index + 1}`}
                        onChange={(e) => {
                          handleChange(e, index);
                        }}
                        onFocus={() => {
                          interval?.stop();
                        }}
                        value={digit}
                      />
                    ))
                  : padTime.split("").map((digit, index) => (
                      <input
                        key={`${uuid}-${index}`}
                        className=" inline-block h-8 w-8 rounded-sm border border-slate-200 text-center font-futura text-[16px] first:!ml-0 odd:ml-5 odd:mr-2 "
                        id={`${uuid}-${index + 1}`}
                        inputMode="numeric"
                        max="9"
                        min="0"
                        onChange={(e) => {
                          handleChange(e, index);
                        }}
                        onFocus={() => {
                          interval?.stop();
                        }}
                        pattern="[0-9]*"
                        type="number"
                        value={digit}
                      />
                    ))}
              </div>
              <div className="flex w-full">
                <Text className="w-1/3 pr-4 text-center text-dimmed" size="xs">
                  時間
                </Text>
                <Text className="w-1/3 pr-1 text-center text-dimmed" size="xs">
                  分
                </Text>
                <Text className="w-1/3 text-center text-dimmed" size="xs">
                  秒
                </Text>
              </div>
            </div>
            <div className="grid w-full grid-cols-3 items-center justify-between">
              <Button
                className="relative mx-auto h-12 w-12 border-none"
                onClick={() => changeTenTime("minus")}
              >
                <RotateArrowRightIcon className="stroke-4 h-8 w-8 fill-none stroke-indigo-500  [transform:rotateY(180deg)_rotateZ(-45deg)]" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                  10
                </span>
              </Button>
              <Button
                className={`relative w-full text-xs font-bold text-white ${
                  isChangeTime
                    ? "bg-green-500"
                    : interval?.active
                    ? "bg-red-500"
                    : time.hours === 0 &&
                      time.minutes === 0 &&
                      time.seconds === 0
                    ? "invisible bg-indigo-500"
                    : "bg-blue-500"
                }`}
                onClick={() => {
                  isChangeTime ? onSubmitChangeTime() : interval?.toggle();
                }}
                size="sm"
              >
                {isChangeTime
                  ? "変更する"
                  : interval?.active
                  ? "一時停止"
                  : time.hours === 0 && time.minutes === 0 && time.seconds === 0
                  ? "開始"
                  : "再開"}
              </Button>
              <Button
                className="relative mx-auto h-12 w-12 border-none"
                onClick={() => changeTenTime("add")}
              >
                <RotateArrowRightIcon className="stroke-4 h-8 w-8 -rotate-45 fill-none stroke-indigo-500" />

                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                  10
                </span>
              </Button>
            </div>
          </div>
        </section>

        {series_id && (
          <nav className="group relative my-2 flex cursor-pointer items-center justify-center pb-2">
            <ButtonLink
              as={`/series/${series_id}`}
              className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:px-4 md:py-2 md:text-sm"
              href={{
                pathname: `/series/${series_id}`,
                query: { series_title },
              }}
              size="xs"
            >
              シリーズ一覧へ
            </ButtonLink>
          </nav>
        )}
      </div>
    </div>
  );
};
