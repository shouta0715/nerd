import { GetTrendsQuery } from "src/gql/graphql";

export type Term = {
  from: string;
  to: string;
};

export type TrendingTime = {
  shortTerm: Term;
  longTerm: Term;
  midTerm: Term;
};

export type TrendResult = Omit<
  GetTrendsQuery["trending_chat_episodes"][0],
  "short_term_chats" | "mid_term_chats" | "long_term_chats"
> & {
  weighted_count: number;
  total_count: number;
};

export type Trends = {
  trending_chat_episodes: TrendResult[];
};

export type GetTrendsBadge = {
  badge: string | null;
  color: string | null;
  isBadge: boolean;
};
