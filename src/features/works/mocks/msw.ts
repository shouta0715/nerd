import { graphql } from "msw";
import { handlerWorkChat } from "src/features/chats/mocks/msw";
import { handlers as commentHandlers } from "src/features/comments/mocks/msw";
import { workData } from "src/features/works/mocks/fixture";

export const handleWork = (status?: number) => {
  return graphql.query("GetWork", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workData));
  });
};

export const handlers = [handleWork(), handlerWorkChat(), ...commentHandlers];
