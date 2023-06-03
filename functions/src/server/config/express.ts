import * as cors from "cors";
import * as express from "express";
import { router } from "../routers/api";
import * as cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use(cookieParser());
app.use("/", router);

export { app };
