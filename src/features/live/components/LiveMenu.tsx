/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC, Suspense } from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input/Input";
import { NextEpisodeMenuSkelton } from "src/components/Elements/Loader/loaders/NextEpisodeMenuSkelton";
import { Text } from "src/components/Elements/Text";
import { NextEpisodeMenu } from "src/features/episodes/components/NextEpisodeMenu";
import { useMenu } from "src/features/episodes/hooks/useMenu";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode: GetEpisodeQuery["episodes_by_pk"];
};

export const LiveMenu: FC<Props> = ({ episode }) => {
  const {
    isMenuOpen,

    setIsMenuOpen,
    onSubmitHandler,
    setInputValue,
    user,

    inputValue,
  } = useMenu();

  return (
    <div>
      <div
        className={`fixed inset-0 z-50 place-items-center bg-black/40 lg:contents ${
          isMenuOpen ? "flex" : "hidden"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
      >
        <div
          className={` mx-auto h-max max-h-[90vh] w-4/5 max-w-md  animate-modal overflow-y-auto rounded-md border border-solid border-slate-100 bg-white shadow lg:static  lg:h-auto lg:max-h-fit lg:w-full lg:translate-x-0 lg:translate-y-0 lg:animate-none lg:border-0 lg:shadow-none lg:transition-none ${
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
              <label
                className="flex items-center"
                htmlFor="commenter-name-input"
              >
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
                    if (!inputValue.trim())
                      setInputValue(user?.user_name ?? "");
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
          </section>
          <div className="h-[1px] w-full bg-slate-200" />
          <Suspense fallback={<NextEpisodeMenuSkelton />}>
            <NextEpisodeMenu episode={episode} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
