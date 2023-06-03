import { authRequest, httpsRequest } from "./server";
import { app } from "./server/config/express";
import { onDeleteHandler } from "./server/routers/auth";

export const api = httpsRequest({
  next: app,
  secrets: ["ADMIN_SECRET"],
});

export const deleteUser = authRequest({
  next: onDeleteHandler,
  secrets: ["ADMIN_SECRET"],
  trigger: "onDelete",
});
