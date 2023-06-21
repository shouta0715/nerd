export type Term = {
  title: string;
  contents: React.ReactNode;
  key: string;
};

export type TermItem = {
  content: React.ReactNode;
  key: string;
  sub_contents?: TermItem[];
};
