import {setCustomClaimsHandler} from "../../functions/customClaims";
import {deleteTokenHandler} from "../../functions/deleteToken";
import {refreshTokenHandler} from "../../functions/refreshToken";
import {userHandler} from "../../functions/user";

import * as express from "express";

const router = express.Router();

router.post("/setCustomClaims", setCustomClaimsHandler);
router.post("/user", userHandler);
router.post("/refreshToken", refreshTokenHandler);
router.delete("/deleteToken", deleteTokenHandler);

export {router};
