/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { XMarkIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { HoverCard, PinInput } from "@mantine/core";
import { IconPencil, IconRotate, IconRotateClockwise } from "@tabler/icons";
import React, { FC, memo, Suspense, useState } from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input/Input";
import { Text } from "src/components/Elements/Text";
import { NextEpisodeMenuSkelton } from "src/components/Layout/loading/NextEpisodeMenuSkelton";
import { NextEpisodeMenu } from "src/features/episodes/components/NextEpisodeMenu";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  episodeTitle?: string;
  episodeNumber?: number;
  workTitle?: string;
  nextEpisodeId?: string;
};

const InitialUserName = localStorage.getItem("user_name");

export const EpisodeMenu: FC<Props> = memo(
  ({ episodeTitle, episodeNumber, workTitle, nextEpisodeId }) => {
    const isMenuOpen = useOpenState((state) => state.isMenuOpen);
    const setIsMenuOpen = useOpenState((state) => state.setIsMenuOpen);
    const user = useUserState((state) => state.user);
    const setUser = useUserState((state) => state.setUser);
    const time = useTimerState((state) => state.time);
    const padTime = useTimerState((state) => state.getPadStartTime());
    const setTime = useTimerState((state) => state.setTime);
    const interval = useTimerState((state) => state.interval);

    const changeTenTime = useTimerState((state) => state.changeTenTime);

    const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue.trim() || !user) return;
      setUser({ ...user, user_name: inputValue });
      setIsMenuOpen(false);
      localStorage.setItem("user_name", inputValue);
    };

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
            className={` mx-auto h-max max-h-[90vh] w-4/5 max-w-md  animate-modal overflow-y-auto rounded-md border border-solid border-slate-100 bg-white shadow lg:static  lg:h-auto lg:max-h-fit lg:w-full lg:translate-y-0 lg:translate-x-0 lg:animate-none lg:border-0 lg:shadow-none lg:transition-none ${
              isMenuOpen ? "block" : "  hidden lg:block"
            }`}
          >
            <section className="px-4 py-2">
              <div className="mb-2 flex items-center justify-between">
                <Text size="sm" className="text-dimmed">
                  メニュー
                </Text>
                <XMarkIcon
                  className="h-4 w-4 cursor-pointer text-dimmed lg:hidden"
                  aria-label="Close modal"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <form onSubmit={onSubmitHandler} className="mb-3 space-y-1">
                <label
                  htmlFor="commenter-name-input"
                  className="flex items-center"
                >
                  <IconPencil className="mr-1" size={14} />
                  <Text component="span" className="text-xs">
                    投稿名の変更
                  </Text>
                  <Button
                    type="submit"
                    className={`ml-auto rounded bg-indigo-500 px-2 py-1 text-xs font-bold text-white transition-transform active:translate-y-0.5 ${
                      inputValue === user?.user_name || !inputValue.trim()
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                    }`}
                    onClick={() => {
                      if (!inputValue.trim())
                        setInputValue(user?.user_name ?? "");
                    }}
                  >
                    変更
                  </Button>
                </label>
                <Input
                  value={inputValue}
                  onBlur={() => {
                    if (!inputValue.trim())
                      setInputValue(user?.user_name ?? "");
                  }}
                  onChange={(e) => {
                    if (e.target.value.length > 30) return;
                    setInputValue(e.target.value);
                  }}
                  maxLength={30}
                  id="commenter-name-input"
                  inputSize="xs"
                  className="py-1 font-hiragino-sans"
                />
              </form>
              <div className="flex flex-col items-center space-y-1">
                <div className="flex">
                  <Text size="sm" className="text-indigo-500">
                    開始から
                  </Text>
                  <HoverCard position="top" width={100} withArrow withinPortal>
                    <HoverCard.Target>
                      <QuestionMarkCircleIcon className="-mr-8 ml-2 h-6 w-6" />
                    </HoverCard.Target>
                    <HoverCard.Dropdown className="bg-black p-1 text-xs text-white shadow">
                      下の数字をタップすると時間を変更できます。
                    </HoverCard.Dropdown>
                  </HoverCard>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <PinInput
                    inputType="number"
                    manageFocus
                    inputMode="numeric"
                    size="sm"
                    value={padTime}
                    onChange={(e) => {
                      const digits = e.match(/.{1,2}/g);
                      if (!digits) return;
                      const [hours, minutes, seconds] = digits;
                      setTime({
                        hours: +hours,
                        minutes: +minutes,
                        seconds: +seconds,
                      });
                    }}
                    onFocus={() => {
                      interval?.stop();
                    }}
                    length={6}
                    type="number"
                    classNames={{
                      wrapper: "w-full even:mr-2 odd:-mr-1",
                      input: "text-[16px]",
                    }}
                  />
                  <div className="flex w-full">
                    <Text
                      size="xs"
                      className="w-1/3 pr-4 text-center text-dimmed"
                    >
                      時間
                    </Text>
                    <Text
                      size="xs"
                      className="w-1/3 pr-1 text-center text-dimmed"
                    >
                      分
                    </Text>
                    <Text size="xs" className="text-cente w-1/3 text-dimmed">
                      秒
                    </Text>
                  </div>
                </div>

                <div className="grid w-full grid-cols-3 items-center justify-between">
                  <Button
                    onClick={() => changeTenTime("minus")}
                    className="relative mx-auto h-12 w-12 border-none"
                  >
                    <IconRotate size={48} className="rotate-180 stroke-1" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                      10
                    </span>
                  </Button>
                  <Button
                    className={`relative w-full text-xs font-bold text-white ${
                      interval?.active
                        ? "bg-red-500"
                        : time.hours === 0 &&
                          time.minutes === 0 &&
                          time.seconds === 0
                        ? "bg-indigo-500"
                        : "bg-blue-500"
                    }`}
                    onClick={() =>
                      interval?.active ? interval.stop() : interval?.start()
                    }
                    size="sm"
                  >
                    {interval?.active
                      ? "一時停止"
                      : time.hours === 0 &&
                        time.minutes === 0 &&
                        time.seconds === 0
                      ? "開始"
                      : "再開"}
                  </Button>
                  <Button
                    onClick={() => changeTenTime("add")}
                    className="relative mx-auto h-12 w-12 border-none"
                  >
                    <IconRotateClockwise
                      size={48}
                      className="rotate-180 stroke-1"
                    />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                      10
                    </span>
                  </Button>
                </div>
              </div>
            </section>
            <div className="h-[1px] w-full bg-slate-200" />
            <Suspense fallback={<NextEpisodeMenuSkelton />}>
              <NextEpisodeMenu
                episodeNumber={episodeNumber}
                episodeTitle={episodeTitle}
                workTitle={workTitle}
                nextEpisodeId={nextEpisodeId}
              />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
);
