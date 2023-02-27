import BoringAvatar from "boring-avatars";
import { FC } from "react";

type Props = {
  user_id: string;
  user_name: string;
};

export const Avatar: FC<Props> = ({ user_id, user_name }) => (
  <BoringAvatar
    name={`${user_id}${user_name}`}
    variant="beam"
    colors={[
      "#4FB3BE",
      "#FF7F50",
      "#6495ED",
      "#A0522D",
      "#00CED1",
      "#FF69B4",
      "#1E90FF",
      "#FFA07A",
      "#20B2AA",
      "#FFC0CB",
    ]}
  />
);
