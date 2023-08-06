import { GetSeasonWorksQuery } from "src/gql/graphql";

export type Work = GetSeasonWorksQuery["works"][0];

export type GetWorksLink = {
  as: boolean;
  series_id?: string | null;
  id: number;
};

export type GenWorkPlaceholder = {
  data: string[];
  slug: string | string[];
};

export type GenSeriesWorkPlaceholder = {
  data: string[];
  slug: string | string[];
  series_id?: string | string[];
};

export type GetWorksQuery = {
  series_id?: string | null;
  title: string;
  series_title: string;
};

export type GetSlugWorkLink = {
  id: number;
  as: boolean;
};

export type GetSlugWorkQuery = {
  title: string;
  series_title: string;
  series_id?: string | null;
};
