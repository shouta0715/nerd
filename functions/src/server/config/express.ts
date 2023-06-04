import * as cors from "cors";
import * as express from "express";
import {router} from "../routers/api";

const corsOptions = {
  origin: process.env.ORIGIN,
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(corsOptions));
app.use("/", router);

export {app};
