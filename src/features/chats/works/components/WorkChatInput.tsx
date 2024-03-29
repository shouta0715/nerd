import { FC } from "react";
import { ChatInput } from "src/features/chats/common/components/ChatInput";
import { useSubmitWork } from "src/features/chats/works/hooks/useSubmitWork";

type Props = {
  work_id: number;
};

export const WorkChatInput: FC<Props> = ({ work_id }) => {
  const { onSubmitHandler, isLoading, setValue, value } = useSubmitWork({
    work_id,
  });

  return (
    <ChatInput
      isLoading={isLoading}
      onSubmitHandler={onSubmitHandler}
      setContent={setValue}
      value={value}
    />
  );
};
