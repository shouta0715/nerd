type ResUser = {
  id: string;
  photo_url: string | null;
  user_name: string;
};

export type ResData = {
  users_by_pk: ResUser | null;
  insert_users_one: ResUser | null;
};
