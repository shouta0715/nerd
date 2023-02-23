import { Avatar, Box, Text } from "@mantine/core";
import React, { FC, memo } from "react";
import { useChatComments } from "src/features/comments/hooks/useChatComments";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";
import { useElementSizeState } from "src/store/global/globalStore";

type Props = {
  episode_id: string;
};

const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { timeCommented } = timeProcessing();
  const { data } = useChatComments({ episode_id });
  const inputFiledHeight = useElementSizeState((state) => state.height);

  return (
    <Box
      component="ul"
      pb={inputFiledHeight}
      className="mx-auto w-full space-y-3 md:max-w-xl"
    >
      {data?.map((comment) => (
        <li key={comment.id} className="flex w-full">
          <Avatar
            src={comment.user?.photo_url}
            alt={comment.user?.user_name}
            radius="xl"
            className="mr-2"
          />
          <div className="max-w-[calc(100%-46px)] flex-1">
            <Text ff="Hiragino Sans" size="xs" className="my-1 font-bold">
              {comment.user?.user_name}
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
              <span>{timeCommented(comment.time)}</span>
            </Text>
          </div>
        </li>
      ))}
    </Box>
  );
});

export default ChatComments;
