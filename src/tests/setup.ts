import type { RequestHandler } from "msw";
import { setupServer } from "msw/node";

export const setupMsw = (...handlers: RequestHandler[]) => {
  const server = setupServer(...handlers);
  beforeAll(() => {return server.listen()});
  afterEach(() => {return server.resetHandlers()});
  afterAll(() => {return server.close()});

  return server;
};
