import { workItemData } from "src/features/works/mocks/fixture";
import { GetSeriesQuery } from "src/graphql/work/workQuery.generated";

const createWorkItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    return {
      ...workItemData,
      title: `${workItemData.title} ${i}`,
    };
  });
};

export const seriesData: GetSeriesQuery = {
  works: createWorkItems(10),
};

export const noSeriesData: GetSeriesQuery = {
  works: [],
};
