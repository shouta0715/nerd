import { Box, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { useSubscriptionChatComments } from "src/features/comments/api/useSubscriptionChatComments";
import { useChatComments } from "src/features/comments/hooks/useChatComments";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { timeCommented } = timeProcessing();
  const router = useRouter();
  const { data } = useChatComments({ episode_id });
  const user = useUserState((state) => state.user);

  useSubscriptionChatComments({
    episode_id,
    category: router.query.category,
  });

  return (
    <Box component="ul" className="mx-auto w-full space-y-3 p-4 md:max-w-xl">
      {data?.map((comment) => (
        <li
          key={comment.id}
          className={`flex w-full ${
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
              <span>{timeCommented(comment.time)}</span>
            </Text>
          </div>
        </li>
      ))}
    </Box>
  );
});

export default ChatComments;
