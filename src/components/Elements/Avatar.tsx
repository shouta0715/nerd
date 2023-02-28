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
      "#00CED1",
      "#FF69B4",
      "#1E90FF",
      "#FFA07A",
      "#20B2AA",
      "#FFC0CB",
      "#87CEFA",
      "#00FA9A",
      "#FFB6C1",
      "#00FF7F",
      "#2E8B57",
      "#FF6347",
      "#008B8B",
      "#FFFF00",
    ]}
  />
);
