import { Work } from "src/features/works/types";
import {
  GetWorkQuery,
  GetWorkSeriesQuery,
  SearchWorksQuery,
} from "src/gql/graphql";

import {
  createEpisodes,
  createWork,
  createWorkItem,
  createWorks,
} from "src/tests/mocks";

export const workData: GetWorkQuery = {
  works_by_pk: createWork(),
};

export const workWithSeriesData: GetWorkSeriesQuery = {
  works_by_pk: {
    ...createWork(),

    episodes: createEpisodes(),
  },
  works: createWorks(),
};

export const workItemData: Work = {
  ...createWorkItem(),
};

export const searchWorksData: SearchWorksQuery = {
  search_works: createWorks(),
};
