/* eslint-disable no-nested-ternary */
import BoringAvatar from "boring-avatars";
import { FC } from "react";

type Props = {
  user_id: string;
  user_name: string;
  size?: "sm" | "md" | "lg";
};

export const Avatar: FC<Props> = ({ user_id, user_name, size = "md" }) => (
  <div className="h-[38px] w-[38px] overflow-hidden rounded-full">
    <BoringAvatar
      name={`${user_id}${user_name}`}
      variant="beam"
      size={size === "sm" ? 32 : size === "md" ? 38 : 48}
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
        "#FF6347",
        "#FFFF00",
      ]}
    />
  </div>
);

Avatar.defaultProps = {
  size: "md",
};
