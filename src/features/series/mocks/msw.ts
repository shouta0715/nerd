import { graphql } from "msw";
import { noSeriesData, seriesData } from "src/features/series/mocks/fixture";

export const handleSeries = ({
  status,
  empty = false,
}: {
  status?: number;
  empty?: boolean;
}) => {
  return graphql.query("GetSeries", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(empty ? noSeriesData : seriesData));
  });
};
