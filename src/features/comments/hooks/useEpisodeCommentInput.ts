import { useCommentInput } from "src/features/comments/hooks/useCommentInput";

export const useEpisodeCommentInput = (episode_id: string) => {
  const {
    content,
    reply_to,
    replied_to_commenter_name,
    user,
    reset,
    insertEpisodeComment,
  } = useCommentInput();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content === "") return;
    await insertEpisodeComment.mutateAsync({
      episode_id,
      content,
      reply_to,
      replied_to_commenter_name,
      commenter_name: user?.user_name || "匿名",
    });

    reset();
  };

  return {
    onSubmitHandler,
    isLoading: insertEpisodeComment.isLoading,
  };
};
