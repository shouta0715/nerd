import dynamic from "next/dynamic";
import { FC } from "react";
import { Loader } from "src/components/Elements/Loader";

type Props = {
  user_id: string;
  user_name: string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
};

const DynamicAvatar = dynamic(() => import("boring-avatars"), {
  ssr: false,
});

export const Avatar: FC<Props> = ({
  user_id,
  user_name,
  size = "md",
  isLoading = false,
}) =>
  isLoading ? (
    <Loader size="xl" />
  ) : (
    <div className="h-[38px] w-[38px] overflow-hidden rounded-full">
      <DynamicAvatar
        colors={["#24C0EB", "#5CCEEE", "#0ea5e9", "#F1EBEB", "#EEE8E8"]}
        name={`${user_id}${user_name}`}
        size={size === "sm" ? 32 : size === "md" ? 38 : 48}
        variant="beam"
      />
    </div>
  );

Avatar.defaultProps = {
  size: "md",
};
