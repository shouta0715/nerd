export type CreateUserMutation = {
  __typename?: "mutation_root";
  insert_users_one?: {
    __typename?: "users";
    id: string;
    photo_url?: string | null;
    user_name: string;
  } | null;
};

export type GetUserQuery = {
  __typename?: "query_root";
  users_by_pk?: {
    __typename?: "users";
    id: string;
    photo_url?: string | null;
    user_name: string;
  } | null;
};
