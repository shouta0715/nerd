import { GetSeriesQuery } from "src/gql/graphql";

export const getSeriesPlaceHolder = (
  series_title: string | string[] | null,
  slug: string | string[] | null
): GetSeriesQuery => {
  return {
    works: [
      {
        series_title: typeof series_title === "string" ? series_title : "",
        series_id: typeof slug === "string" ? slug : "",
        title: "",
        id: 0,
        has_episodes: undefined,
        episodes: [],
      },
    ],
  };
};
