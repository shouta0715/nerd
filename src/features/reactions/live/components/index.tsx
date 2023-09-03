import { FC } from "react";
import { Reactions } from "src/features/reactions/common/components/Reactions";
import { useLiveReactions } from "src/features/reactions/live/hooks/useLiveReactions";

type Props = {
  episode_id: string;
  disabledAction: boolean;
};

export const LiveReactions: FC<Props> = ({ episode_id, disabledAction }) => {
  const { onSubmitHandler, reactions } = useLiveReactions(episode_id);

  return (
    <Reactions
      data={reactions}
      disabledAction={disabledAction}
      onSubmitHandler={onSubmitHandler}
    />
  );
};
