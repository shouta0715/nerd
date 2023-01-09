export type Comment = {
  id: string;
  content: string;
  spoiler: boolean;
  created_at: string;
  post_id: string;
  user_id: string;
};

export type CommentInput = {
  content: string;
  spoiler: boolean;
};
