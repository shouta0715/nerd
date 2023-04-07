export type User = {
  id: string;
  user_name: string;
  photo_url: string | null;
  anonymous: boolean;
  provider_user_name: string | null;
  isDefaultPhoto: boolean;
};
