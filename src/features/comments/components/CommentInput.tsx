/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ActionIcon, Box, Textarea } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons";
import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Modal } from "src/components/Elements/Modal";

import { useSubmitComment } from "src/features/comments/hooks/useSubmitComment";
import { useInputCommentState } from "src/features/comments/store";
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

  return (
    <div className="fixed bottom-0 w-full border-0 border-t border-solid border-slate-200 bg-white px-4 py-2">
      <Modal />
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
          <Avatar user_id={user?.id ?? ""} user_name={user?.user_name ?? ""} />
        </figure>
        <Textarea
          disabled={!user}
          placeholder={user ? `${user?.user_name}で投稿` : ""}
          className="w-full max-w-sm flex-1"
          classNames={{
            input: "text-[16px] pr-[50px] placeholder:pl-4 scale-90",
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
      </form>
    </div>
  );
});
