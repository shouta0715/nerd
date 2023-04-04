import { FC } from "react";
import { ChatInput } from "src/features/chats/components/ChatInput";
import { useSubmitWork } from "src/features/chats/hooks/useSubmitWork";

type Props = {
  work_id: number;
};

export const WorkChatInput: FC<Props> = ({ work_id }) => {
  const { onSubmitHandler, isLoading, setContent, content } = useSubmitWork({
    work_id,
  });

  return (
    <ChatInput
      content={content}
      isLoading={isLoading}
      onSubmitHandler={onSubmitHandler}
      setContent={setContent}
    />
  );
};
