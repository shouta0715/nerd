import { graphql } from "msw";
import { handlerWorkChat } from "src/features/chats/common/mocks/msw";
import { handlers as commentHandlers } from "src/features/comments/common/mocks/msw";
import {
  searchWorksData,
  workData,
  workWithSeriesData,
} from "src/features/works/common/mocks/fixture";

export const handleWork = (status?: number) => {
  return graphql.query("GetWork", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workData));
  });
};

export const handleWorkWithSeries = (status?: number) => {
  return graphql.query("GetWorkSeries", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workWithSeriesData));
  });
};

export const handleSearchWorks = (status?: number) => {
  return graphql.query("SearchWorks", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(searchWorksData));
  });
};

export const handlers = [
  handleWork(),
  handlerWorkChat(),
  handleWorkWithSeries(),
  handleSearchWorks(),
  ...commentHandlers,
];
