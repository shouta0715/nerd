import { rest } from "msw";
import {
  createUserData,
  customClaimsData,
} from "src/features/auth/mocks/fixture";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;

export const handleSetCustomClaims = (status?: number) => {
  return rest.post(`${API_URL}/setCustomClaims`, (req, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.status(200), ctx.json(customClaimsData));
  });
};

export const handleCreateUser = (status?: number) => {
  return rest.post(`${API_URL}/user`, (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.status(200), ctx.json(createUserData));
  });
};

export const handler = [handleSetCustomClaims(), handleCreateUser()];
