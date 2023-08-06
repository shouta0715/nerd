import { GetSeriesQuery } from "src/gql/graphql";
import { createWorkItems } from "src/tests/mocks";

export const seriesData: GetSeriesQuery = {
  works: createWorkItems(10),
};

export const noSeriesData: GetSeriesQuery = {
  works: [],
};
