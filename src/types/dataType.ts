export type ResultData = {
  TID: number;
  title: string;
  number: number;
  start_time: string;
  end_time: string;
};

export type TvFeed = {
  "tv:genre": string;
  "tv:startDatetime": string;
  "tv:endDatetime": string;
  "tv:iepgUrl": string;
  "tv:performer": string;
};

export type Item = {
  title: string;
  link: string;
  description: string;
  "dc:date": string;
  "dc:publisher": string;
  "tv:feed": TvFeed;
};

export type AutoCompleteData = {
  title: string;
  episodeTitle?: string;
  value: string;
  number?: number;
};

export type RefreshTokenResult = {
  idToken: string;
  message: string;
};
