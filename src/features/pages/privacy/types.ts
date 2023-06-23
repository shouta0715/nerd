export type Privacy = {
  title: string;
  content: React.ReactNode;
  key: string;
};

export type PrivacyItem = {
  content: React.ReactNode;
  key: string;
  sub_contents?: PrivacyItem[];
};
