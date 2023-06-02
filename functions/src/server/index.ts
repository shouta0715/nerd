import { Next } from "./types";

import { onRequest } from "firebase-functions/v2/https";

type RequestConfig<T> = {
  next: Next<T>;
  secrets?: string[];
};

export const httpsRequest = <T>({ next, secrets }: RequestConfig<T>) => {
  return onRequest(
    {
      cors: process.env.ORIGIN,
      region: process.env.REGION,
      secrets: secrets ?? [],
    },
    (req, res) => {
      next(req, res);
    }
  );
};
