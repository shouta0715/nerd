import { ReturnCreateUser } from "src/libs/server/types";

export const customClaimsData = { message: "ok" };

export const createUserData: ReturnCreateUser = {
  data: {
    insert_users_one: {
      id: "test",
      photo_url: "/__mocks__/user1.jpg",
      user_name: "test",
    },
  },
  message: "ok",
};
