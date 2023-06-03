import { AuthNext, Next } from "./types";
import { region } from "firebase-functions/v1";

type RequestConfig<T> = {
  next: Next<T>;
  secrets?: string[];
};

type AuthConfig = {
  next: AuthNext;
  secrets?: string[];
  trigger: "onCreate" | "onDelete";
};

export const httpsRequest = <T>({ next, secrets }: RequestConfig<T>) => {
  return region("us-central1")
    .runWith({
      secrets: secrets ?? [],
    })
    .https.onRequest((req, res) => {
      next(req, res);
    });
};

export const authRequest = ({ next, secrets, trigger }: AuthConfig) => {
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
