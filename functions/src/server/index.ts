
import {AuthNext, Next} from "./types";
import {region} from "firebase-functions/v1";
import * as _cors from "cors";

type RequestConfig<T> = {
  next: Next<T>;
  secrets?: string[];
};

type AuthConfig = {
  next: AuthNext;
  secrets?: string[];
  trigger: "onCreate" | "onDelete";
};

export const httpsRequest = <T>({next, secrets}: RequestConfig<T>) => {
  const cors = _cors({
    origin: process.env.ORIGIN,
  });

  return region("us-central1")
    .runWith({
      secrets: secrets ?? [],
    })
    .https.onRequest((req, res) => {
      cors(req, res, () => next(req, res));
    });
};

export const authRequest = ({next, secrets, trigger}: AuthConfig) => {
  if (trigger === "onCreate") {
    return region("us-central1")
      .runWith({
        secrets: secrets ?? [],
      })
      .auth.user()
      .onCreate((user) => {
        next(user);
      });
  }

  return region("us-central1")
    .runWith({
      secrets: secrets ?? [],
    })
    .auth.user()
    .onDelete((user) => {
      next(user);
    });
};
