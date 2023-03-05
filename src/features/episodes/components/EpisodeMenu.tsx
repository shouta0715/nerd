/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ActionIcon, Burger, Button, Input, Text } from "@mantine/core";
import {
  IconPencil,
  IconPlayerSkipForward,
  IconSettings,
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
    const interval = useTimerState((state) => state.interval);

    const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue.trim() || !user) return;
      setUser({ ...user, user_name: inputValue });
      setIsOpened(false);
      localStorage.setItem("user_name", inputValue);
    };

    return (
      <div className="relative">
        <Burger
          className="lg:hidden"
          opened={isOpened}
          onClick={() => setIsOpened(!isOpened)}
          aria-label={isOpened ? "メニューを閉じる" : "メニューを開く"}
        />
        <div
          className={`absolute top-10 right-0 w-60 rounded border border-solid border-slate-200 bg-white lg:static lg:w-full lg:border-0 ${
            isOpened ? "block" : "hidden lg:block"
          }`}
        >
          <section className="px-4 py-2">
            <Text size="sm" color="dimmed" className="mb-2">
              メニュー
            </Text>
            <form onSubmit={onSubmitHandler} className="mb-3 space-y-1">
              <label
                htmlFor="commenter-name-input"
                className="flex items-center"
              >
                <IconPencil className="mr-1" size={14} />
                <Text component="span" className="text-sm">
                  投稿名の変更
                </Text>
              </label>
              <Input
                value={inputValue}
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
              <Text size="sm" color="indigo">
                開始から
              </Text>
              <div className="flex items-center">
                <ActionIcon
                  className="mr-2"
                  size={26}
                  variant="subtle"
                  color="blue"
                  radius="xl"
                >
                  <IconSettings size={22} />
                </ActionIcon>
                <Text size="sm" className="flex items-center space-x-1">
                  <span>{time.hours.toString().padStart(2, "0")}</span>
                  <span>時間</span>
                  <span>{time.minutes.toString().padStart(2, "0")}</span>
                  <span>分</span>
                  <span>{time.seconds.toString().padStart(2, "0")}</span>
                  <span>秒</span>
                </Text>
              </div>
              <Button
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
                className="w-full"
              >
                {interval?.active
                  ? "一時停止"
                  : time.hours === 0 && time.minutes === 0 && time.seconds === 0
                  ? "開始"
                  : "再開"}
              </Button>
            </div>
          </section>
          <div className="h-[1px] w-full bg-slate-200" />
          <section className="px-4 py-2">
            <Text size="sm" color="dimmed" className="mb-2">
              エピソード
            </Text>
            <Text component="div">
              <Text component="p" className="mb-1 text-sm">
                {workTitle}
              </Text>
              {episodeTitle && (
                <div className="flex">
                  <Text size="sm" className="mr-1" color="dimmed">
                    {episodeNumber}.
                  </Text>
                  <Text size="sm" color="dimmed">
                    {episodeTitle}
                  </Text>
                </div>
              )}
            </Text>
            {nextEpisodeId && (
              <Text
                size="sm"
                component={Link}
                href={`${data?.episodes_by_pk?.id}?category=archive`}
                className="my-2 flex items-center space-x-2"
              >
                <IconPlayerSkipForward size={16} />
                <span className="inline-block pt-1">次のエピソード</span>
              </Text>
            )}
            <Text
              size="sm"
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
