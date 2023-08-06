import { GetSeriesLink, GetSeriesQuery } from "src/features/series/types";

export const getSeriesLink = ({ series_id }: GetSeriesLink) => {
  return `/series/${series_id}`;
};

export const getSeriesQuery = ({ title }: GetSeriesQuery) => {
  return { series_title: title };
};
