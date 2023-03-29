import { useMutateComment } from "src/features/comments/api/useMutate";
import { useInputCommentState } from "src/features/comments/store";
import { useUserState } from "src/store/user/userState";

export const useEpisodeCommentInput = (episode_id: string) => {
  const [{ content, reply_to, replied_to_commenter_name }, reset] =
    useInputCommentState((state) => [
      state.inputComment,
      state.resetInputComment,
    ]);
  const user = useUserState((state) => state.user);
  const { insertEpisodeComment } = useMutateComment();
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
