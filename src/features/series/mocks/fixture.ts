import { GetSeriesQuery } from "src/graphql/work/workQuery.generated";
import { createWorkItems } from "src/tests/mocks";

export const seriesData: GetSeriesQuery = {
  works: createWorkItems(10),
};

export const noSeriesData: GetSeriesQuery = {
  works: [],
};
