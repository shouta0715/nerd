import { ActionIcon, Avatar, Box, Textarea } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons";
import React, { FC, memo } from "react";
import { useInputFiledSize } from "src/features/comments/hooks/useInputFiledSize";
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
  const { onSubmitHandler, insertComment } = useSubmitComment({ episode_id });
  const user = useUserState((state) => state.user);
  const setIsOpenModal = useGlobalState((state) => state.setIsOpenModal);
  const { ref } = useInputFiledSize();

  return (
    <div
      ref={ref}
      className="fixed bottom-0 left-0 w-full border-0 border-t border-solid border-slate-200 bg-white px-4 py-2"
    >
      <form
        className=" container mx-auto flex items-center justify-center opacity-100"
        onSubmit={onSubmitHandler}
      >
        <figure className="m-0 mr-2">
          <Avatar
            radius="xl"
            className="cursor-pointer"
            src={user?.photo_url}
            onClick={() => {
              if (user?.anonymous) setIsOpenModal(true);
            }}
          />
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
                loading={insertComment.isLoading}
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
