import {setCustomClaimsHandler} from "../../functions/customClaims";
import {userHandler} from "../../functions/user";
import * as express from "express";
const router = express.Router();

router.post("/setCustomClaims", setCustomClaimsHandler);
router.post("/user", userHandler);

export {router};
