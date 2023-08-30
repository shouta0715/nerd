export type Term = {
  from: string;
  to: string;
};

export type TrendingTime = {
  shortTerm: Term;
  longTerm: Term;
  midTerm: Term;
};
