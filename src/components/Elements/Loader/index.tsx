import { Dots } from "src/components/Elements/Loader/items/Dots";
import { Oval } from "src/components/Elements/Loader/items/Oval";
import type { LoaderProps } from "src/components/Elements/Loader/type";

export const Loader = ({
  variant = "oval",
  color = "indigo",
  size = "md",
  className = "",
}: LoaderProps) =>
  variant === "oval" ? (
    <Oval className={className} color={color} size={size} />
  ) : (
    <Dots className={className} color={color} size={size} />
  );
