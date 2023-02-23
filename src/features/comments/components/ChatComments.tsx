import { Avatar, Text } from "@mantine/core";
import React, { FC, memo } from "react";
import { useQueryComments } from "src/features/comments/api/useQueryComments";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";

type Props = {
  episode_id: string;
};

const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { data } = useQueryComments(episode_id);
  const { formatTimeDistance, timeCommented } = timeProcessing();

  return (
    <ul className="mx-auto w-full space-y-3 md:max-w-xl">
      {data?.chat_comments?.map((comment) => (
        <li key={comment.id}>
          <div>
            <div className=" flex items-center">
              <Avatar
                src={comment.user?.photo_url}
                alt={comment.user?.user_name}
                radius="xl"
                className="mr-2"
              />
              <div>
                <Text size="xs" className="font-bold">
                  {comment.user?.user_name}
                </Text>
                <Text size="xs" color="dimmed" className="space-x-4">
                  <span>{timeCommented(comment.time)}</span>
                  <span>{formatTimeDistance(comment.created_at)}</span>
                </Text>
              </div>
            </div>
            <Text className="pl-11" size="sm">
              {comment.content}
            </Text>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default ChatComments;
