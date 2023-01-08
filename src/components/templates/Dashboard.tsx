import React, { FC } from "react";
import { useUserStore } from "../../store/user/userState";
import { MainPost } from "../organism/posts/MainPost";

export const Dashboard: FC = () => {
  const user = useUserStore((state) => state.user);

  return <div>{user ? <MainPost /> : <div>Not logged in</div>}</div>;
};
