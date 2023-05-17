import { graphql, rest } from "msw";
import {
  createUserData,
  customClaimsData,
  getUserData,
} from "src/features/auth/mocks/fixture";

export const handleSetCustomClaims = (status?: number) =>
  rest.post("/api/auth/setCustomClaims", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.status(200), ctx.json(customClaimsData));
  });

export const handleGetUser = (status?: number) =>
  graphql.query("GetUser", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(getUserData));
  });

export const handleCreateUser = (status?: number) =>
  rest.post("/api/user", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.status(200), ctx.json(createUserData));
  });

export const handler = [
  handleSetCustomClaims(),
  handleGetUser(),
  handleCreateUser(),
];
