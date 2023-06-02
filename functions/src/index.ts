import { refresh } from "./server/functions/referesh";
import { httpsRequest } from "./server";
import { userHandler } from "./server/functions/user";
import { setCustomClaimsHandler } from "./server/functions/setCustomClaims";
import * as cors from "cors";
import * as express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
app.use("/api", router);
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// すべてのリクエストをapi/以下にする

router.post("/setCustomClaims", setCustomClaimsHandler);
router.post("/user", userHandler);
router.post("/refreshToken", refresh);

export const api = httpsRequest({
  next: app,
  secrets: ["ADMIN_SECRET"],
});
