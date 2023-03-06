/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import {
  ActionIcon,
  Burger,
  Button,
  CloseButton,
  HoverCard,
  Input,
  PinInput,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import {
  IconPencil,
  IconPlayerSkipForward,
  IconRotate,
  IconRotateClockwise,
  IconStack2,
} from "@tabler/icons";
import Link from "next/link";
import React, { FC, memo, useState } from "react";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
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
    const { data } = useQueryEpisode(nextEpisodeId);
    const [isOpened, setIsOpened] = useState(false);
    const user = useUserState((state) => state.user);
    const setUser = useUserState((state) => state.setUser);
    const time = useTimerState((state) => state.time);
    const padTime = useTimerState((state) => state.getPadStartTime());
    const setTime = useTimerState((state) => state.setTime);
    const interval = useTimerState((state) => state.interval);
    const ref = useClickOutside(() => setIsOpened(false));
    const changeTenTime = useTimerState((state) => state.changeTenTime);

    const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue.trim() || !user) return;
      setUser({ ...user, user_name: inputValue });
      setIsOpened(false);
      localStorage.setItem("user_name", inputValue);
    };

    return (
      <div ref={ref}>
        <Burger
          className="lg:hidden"
          opened={isOpened}
          onClick={() => setIsOpened(!isOpened)}
          aria-label={isOpened ? "メニューを閉じる" : "メニューを開く"}
        />
        <div
          className={`fixed inset-0 bg-black/40 lg:hidden ${
            isOpened ? "block" : "hidden"
          }`}
          onClick={() => setIsOpened(false)}
        />
        <div
          className={`fixed top-1/2 left-1/2 max-h-[90vh] w-4/5 max-w-md  -translate-y-1/2 -translate-x-1/2 overflow-y-auto rounded-md border border-solid border-slate-100 bg-white shadow  lg:static lg:h-auto lg:max-h-fit lg:w-full lg:translate-y-0 lg:translate-x-0 lg:border-0 lg:shadow-none lg:transition-none ${
            isOpened ? "block" : "  hidden lg:block"
          }`}
        >
          <section className="px-4 py-2">
            <div className="mb-4 flex items-center justify-between">
              <Text size="xs" color="dimmed">
                メニュー
              </Text>
              <CloseButton
                aria-label="Close modal"
                size="sm"
                onClick={() => setIsOpened(false)}
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
                <UnstyledButton
                  type="submit"
                  className={`ml-auto rounded bg-indigo-500 px-2 py-1 text-xs font-bold text-white transition-transform active:translate-y-0.5 ${
                    inputValue === user?.user_name || !inputValue.trim()
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                  onClick={() => {
                    if (!inputValue.trim())
                      setInputValue(user?.user_name ?? "");
                  }}
                >
                  変更
                </UnstyledButton>
              </label>
              <Input
                value={inputValue}
                onBlur={() => {
                  if (!inputValue.trim()) setInputValue(user?.user_name ?? "");
                }}
                onChange={(e) => setInputValue(e.currentTarget.value)}
                maxLength={14}
                classNames={{
                  input: "text-[16px]",
                }}
                id="commenter-name-input"
                size="xs"
              />
            </form>
            <div className="flex flex-col items-center space-y-1">
              <div className="flex">
                <Text size="sm" color="indigo" className="">
                  開始から
                </Text>
                <HoverCard position="top" width={100} withArrow withinPortal>
                  <HoverCard.Target>
                    <QuestionMarkCircleIcon className="-mr-8 ml-2 h-6 w-6" />
                  </HoverCard.Target>
                  <HoverCard.Dropdown className="bg-black p-1 text-xs text-white shadow">
                    下の数字をタップすると変更できます。
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
                    interval?.stop();
                    const digits = e.match(/.{1,2}/g);
                    if (!digits) return;
                    const [hours, minutes, seconds] = digits;
                    setTime({
                      hours: +hours,
                      minutes: +minutes,
                      seconds: +seconds,
                    });
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
                    color="dimmed"
                    className="w-1/3 pr-4 text-center"
                  >
                    時間
                  </Text>
                  <Text
                    size="xs"
                    color="dimmed"
                    className="w-1/3 pr-1 text-center"
                  >
                    分
                  </Text>
                  <Text size="xs" color="dimmed" className="w-1/3 text-center">
                    秒
                  </Text>
                </div>
              </div>

              <div className="grid w-full grid-cols-3 items-center justify-between">
                <ActionIcon
                  onClick={() => changeTenTime("minus")}
                  color="indigo"
                  variant="transparent"
                  className="relative mx-auto h-12 w-12"
                >
                  <IconRotate size={48} className="rotate-180 stroke-1" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                    10
                  </span>
                </ActionIcon>
                <Button
                  className="relative w-full"
                  onClick={() =>
                    interval?.active ? interval.stop() : interval?.start()
                  }
                  size="xs"
                  color={
                    interval?.active
                      ? "red"
                      : time.hours === 0 &&
                        time.minutes === 0 &&
                        time.seconds === 0
                      ? "indigo"
                      : "blue"
                  }
                >
                  {interval?.active
                    ? "一時停止"
                    : time.hours === 0 &&
                      time.minutes === 0 &&
                      time.seconds === 0
                    ? "開始"
                    : "再開"}
                </Button>
                <ActionIcon
                  onClick={() => changeTenTime("add")}
                  color="indigo"
                  className="relative mx-auto h-12 w-12"
                  variant="transparent"
                >
                  <IconRotateClockwise
                    size={48}
                    className="rotate-180 stroke-1"
                  />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                    10
                  </span>
                </ActionIcon>
              </div>
            </div>
          </section>
          <div className="h-[1px] w-full bg-slate-200" />
          <section className="border-0 border-b border-solid border-slate-200 px-4 py-2">
            <Text size="xs" color="dimmed" className="mb-2">
              エピソード
            </Text>
            <Text component="div">
              <Text component="p" className="mb-1 text-xs">
                {workTitle}
              </Text>
              {episodeTitle && (
                <div className="flex">
                  <Text size="xs" className="mr-1" color="dimmed">
                    {episodeNumber}.
                  </Text>
                  <Text size="xs" color="dimmed">
                    {episodeTitle}
                  </Text>
                </div>
              )}
            </Text>
            {nextEpisodeId && (
              <Text
                size="xs"
                component={Link}
                href={`${data?.episodes_by_pk?.id}?category=archive`}
                className="my-2 flex items-center space-x-2"
              >
                <IconPlayerSkipForward size={16} />
                <span className="inline-block">次のエピソード</span>
              </Text>
            )}
            <Text
              size="xs"
              component={Link}
              href={`${"xxx"}?category=archive`}
              className="mt-2 flex items-center space-x-2"
            >
              <IconStack2 size={16} strokeWidth={1.5} />
              <span className="inline-block">他のエピソード</span>
            </Text>
          </section>
        </div>
      </div>
    );
  }
);
