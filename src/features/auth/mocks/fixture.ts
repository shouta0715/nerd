import { ReturnCreateUser } from "src/libs/server/types";

export const customClaimsData = { message: "ok" };

export const createUserData: ReturnCreateUser = {
  data: {
    insert_users_one: {
      id: "test",
    },
  },
  message: "ok",
};
