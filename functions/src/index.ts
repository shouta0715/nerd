import { refresh } from "./server/functions/referesh";
import { httpsRequest } from "./server";
import { userHandler } from "./server/functions/user";
import { setCustomClaimsHandler } from "./server/functions/setCustomClaims";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const setCustomClaims = httpsRequest({
  next: setCustomClaimsHandler,
});

export const user = httpsRequest({
  next: userHandler,
  secrets: ["ADMIN_SECRET"],
});

export const refreshToken = httpsRequest({
  next: refresh,
});
