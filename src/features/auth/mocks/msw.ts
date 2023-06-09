import { rest } from "msw";
import {
  createUserData,
  customClaimsData,
} from "src/features/auth/mocks/fixture";

export const handleSetCustomClaims = (status?: number) => {
  return rest.post("/api/auth/setCustomClaims", (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.status(200), ctx.json(customClaimsData));
  });
};

export const handleCreateUser = (status?: number) => {
  return rest.post("/api/user", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.status(200), ctx.json(createUserData));
  });
};

export const handler = [handleSetCustomClaims(), handleCreateUser()];
