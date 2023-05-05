import { CreateUserSchema, ReturnCreateUser } from "src/libs/server/types";

export const createUser = async ({
  id,
  user_name,
  photo_url,
}: CreateUserSchema): Promise<ReturnCreateUser> => {
  const res = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, user_name, photo_url }),
  });

  if (!res.ok) {
    const { message } = await res.json();

    throw new Error(message);
  }

  const user = (await res.json()) as ReturnCreateUser;

  return user;
};
