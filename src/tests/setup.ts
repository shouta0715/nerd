import { setupWorker, type RequestHandler } from "msw";
import { setupServer } from "msw/node";

export const setupMsw = (...handlers: RequestHandler[]) => {
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};

export const startMsw = (...handlers: RequestHandler[]) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    const server = setupServer(...handlers);
    server.listen();
  } else {
    const client = setupWorker(...handlers);
    client.start();
  }
};

export const setupAutoSizeTextarea = () => {
  beforeAll(() => {
    Object.defineProperty(document, "fonts", {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      value: { addEventListener() {}, removeEventListener() {} },
    });
  });
};
