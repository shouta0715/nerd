import { ReturnGetUser } from "src/libs/server/types";

export const getUser = async (id: string): Promise<ReturnGetUser> => {
  const res = await fetch(`/api/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const { message } = await res.json();

    throw new Error(message);
  }

  const user = (await res.json()) as ReturnGetUser;

  return user;
};
