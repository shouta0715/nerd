import { useMutateChatWork } from "src/features/chats/api/useMutateChatWork";
import { useSubmitChat } from "src/features/chats/hooks/useSubmitChat";
import { useGlobalState } from "src/store/global/globalStore";

type Args = {
  work_id: number;
};

export const useSubmitWork = ({ work_id }: Args) => {
  const { insertChat } = useMutateChatWork();
  const { content, user, getTime, setContent } = useSubmitChat();
  const authLoading = useGlobalState((state) => state.authLoading);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!content.trim() || authLoading) return;
      const object = {
        work_id,
        content,
        comment_time: getTime(),
        commenter_name: user?.user_name || "匿名",
      };
      insertChat.mutateAsync({
        object,
      });
      setContent("");
    } catch (error) {
      //
    }
  };

  return {
    onSubmitHandler,
    isLoading: insertChat.isLoading,
    setContent,
    content,
  };
};
