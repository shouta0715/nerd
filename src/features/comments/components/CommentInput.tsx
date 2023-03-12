/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ActionIcon, Box, Indicator, Loader, Textarea } from "@mantine/core";
import { IconArrowUp, IconSettings } from "@tabler/icons";
import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";

import { useSubmitComment } from "src/features/comments/hooks/useSubmitComment";
import { useInputCommentState } from "src/features/comments/store";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

export const InputFiled: FC<Props> = memo(({ episode_id }) => {
  const { content } = useInputCommentState((state) => state.inputComment);
  const setInputComment = useInputCommentState(
    (state) => state.setInputComment
  );
  const { onSubmitHandler, isLoading } = useSubmitComment({ episode_id });
  const user = useUserState((state) => state.user);
  const setIsOpenModal = useGlobalState((state) => state.setIsOpenModal);
  const authLoading = useGlobalState((state) => state.authLoading);
  const setIsMenuOpen = useOpenState((state) => state.setIsMenuOpen);
  const isMenuOpen = useOpenState((state) => state.isMenuOpen);
  const time = useTimerState((state) => state.getTime());

  return (
    <div className="fixed left-0 bottom-0 w-full border-0 border-t border-solid border-slate-200 bg-white px-4 py-2">
      <form
        className="container mx-auto flex items-center justify-center opacity-100"
        onSubmit={onSubmitHandler}
      >
        <figure
          className="m-0 mr-2"
          onClick={() => {
            if (user?.anonymous) setIsOpenModal(true);
          }}
        >
          {authLoading ? (
            <Loader />
          ) : (
            <Indicator
              offset={4}
              color="red"
              withBorder
              size={16}
              disabled={user?.anonymous}
            >
              <Avatar
                user_id={user?.id ?? ""}
                user_name={user?.user_name ?? ""}
              />
            </Indicator>
          )}
        </figure>
        <Textarea
          disabled={time === 0 || !user}
          placeholder={
            user && time !== 0
              ? `${user?.user_name}で投稿`
              : !user
              ? "ログイン中です"
              : "再生してください"
          }
          className="w-full max-w-sm flex-1"
          classNames={{
            input:
              "text-[16px] pr-[50px] placeholder:pl-4 scale-90 placeholder:text-sm placeholder:align-middle placeholder:pt-0.5 disabled:bg-white disabled:border-red-500 disabled:placeholder:text-red-500",
          }}
          rightSectionWidth={80}
          maxRows={3}
          maxLength={100}
          autosize
          radius="xl"
          value={content}
          rightSection={
            <div className="flex h-full flex-col items-center justify-around py-2">
              <Box
                className={`text-xs transition-opacity ${
                  content.length === 100 ? "text-red-400" : "text-gray-500"
                }
                ${content.length < 50 ? "opacity-0" : "opacity-100"}`}
              >
                {content.length > 50 && content.length.toString()}
              </Box>
              <ActionIcon
                loading={isLoading}
                type="submit"
                variant="light"
                color="teal"
                radius="xl"
              >
                <IconArrowUp />
              </ActionIcon>
            </div>
          }
          onChange={(e) =>
            content.length <= 100 &&
            setInputComment({
              content: e.currentTarget.value,
            })
          }
        />
        <IconSettings
          className="cursor-pointer stroke-indigo-500 transition-transform active:scale-90 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        />
      </form>
    </div>
  );
});
