/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, Text, UnstyledButton } from "@mantine/core";
import { IconArrowDown, IconPlayerPause, IconPlayerPlay } from "@tabler/icons";
import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { useChatComments } from "src/features/comments/hooks/useChatComments";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { data, bottomRef, isBottom, entry, interval } = useChatComments({
    episode_id,
  });
  const { timeCommented } = timeProcessing();
  const user = useUserState((state) => state.user);

  // if (!user) {
  //   throw new Promise(() => {});
  // }

  return (
    <Box
      component="ul"
      className="relative mx-auto w-full flex-1 space-y-3 px-4 pt-4 pb-1 md:max-w-xl"
    >
      <UnstyledButton
        onClick={() => interval?.toggle()}
        className="absolute  top-1/2 left-1/2 flex  h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center  justify-center rounded-full bg-indigo-500 transition-transform"
      >
        {interval?.active ? (
          <IconPlayerPause className="fill-white text-white" />
        ) : (
          <IconPlayerPlay className="fill-white text-white" />
        )}
      </UnstyledButton>
      {data?.map((comment) => (
        <li
          key={comment.id}
          className={`flex w-full animate-chat transition-all ${
            user?.id === comment.user?.id ? "flex-row-reverse" : ""
          }`}
        >
          <figure
            className={`m-0 ${user?.id === comment.user?.id ? "ml-2" : "mr-2"}`}
          >
            <Avatar
              user_id={comment.user?.id}
              user_name={comment.commenter_name}
            />
          </figure>
          <div
            className={`max-w-[calc(100%-92px)] flex-1 ${
              user?.id === comment.user?.id ? "text-right" : ""
            }`}
          >
            <Text ff="Hiragino Sans" size="xs" className="my-1 font-bold">
              {comment.commenter_name}
            </Text>

            <Text
              component="p"
              ff="Hiragino Sans"
              size="sm"
              className="break-words"
            >
              {comment.content}
            </Text>
            <Text size="xs" color="dimmed">
              <span>{timeCommented(comment.comment_time)}</span>
            </Text>
          </div>
        </li>
      ))}
      <UnstyledButton
        className={`fixed left-1/2 bottom-[4.5rem] z-0 flex h-7 w-7   -translate-x-1/2 cursor-pointer  items-center justify-center rounded-full bg-indigo-500 shadow-md shadow-black/[0.3]  transition-transform active:translate-y-1 ${
          isBottom ? "translate-y-10" : "translate-y-0"
        }`}
        onClick={() => {
          entry?.target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <IconArrowDown size={22} className="text-white" />
      </UnstyledButton>
      <div ref={bottomRef} className="absolute bottom-0 opacity-0" />
    </Box>
  );
});

export default ChatComments;
