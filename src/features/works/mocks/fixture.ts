import { GetWorkQuery } from "src/graphql/work/workQuery.generated";

export const workData: GetWorkQuery = {
  works_by_pk: {
    id: 1,
    title: "僕のヒーローアカデミア",
    has_episodes: true,
    series_id: "boku-no-hero-academia",
    series_title: "僕のヒーローアカデミア OVA",
  },
};
