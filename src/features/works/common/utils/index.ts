import {
  GenSeriesWorkPlaceholder,
  GenWorkPlaceholder,
} from "src/features/works/common/types";
import { GetWorkQuery, GetWorkSeriesQuery } from "src/gql/graphql";

export const genWorkPlaceholder = ({
  data,
  slug,
}: GenWorkPlaceholder): GetWorkQuery => {
  const [title, series_title, series_id] = data;

  return {
    works_by_pk: {
      id: Number(slug),
      title,
      series_title,
      series_id: series_id === "" ? null : series_id,
    },
  };
};

export const genSeriesWorkPlaceholder = ({
  data,
  slug,
  series_id,
}: GenSeriesWorkPlaceholder): GetWorkSeriesQuery => {
  const [title, series_title] = data;

  return {
    works_by_pk: {
      id: Number(slug),
      title,
      series_title,
      series_id: series_id?.toString() ?? "",
      has_episodes: false,
      episodes: [],
    },
    works: [],
  };
};
