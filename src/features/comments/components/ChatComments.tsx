import React, { FC, memo } from "react";
import { useQueryComments } from "src/features/comments/api/useQueryComments";

type Props = {
  episode_id: string;
};

export const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { data } = useQueryComments(episode_id);
  console.log(data);

  return <div>ChatComments</div>;
});
