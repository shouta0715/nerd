import { GetWorkQuery, GetWorkSeriesQuery } from "src/gql/graphql";

export const getWorkPlaceholder = (
  data: string[],
  slug: string | string[]
): GetWorkQuery => {
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

export const getSeriesWorkPlaceholder = (
  data: string[],
  slug: string | string[],
  series_id?: string | string[]
): GetWorkSeriesQuery => {
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
