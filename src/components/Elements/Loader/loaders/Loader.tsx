import { LoaderProps } from "src/components/Elements/Loader";
import { Dots } from "src/components/Elements/Loader/loaders/Dots";
import { Oval } from "src/components/Elements/Loader/loaders/Oval";

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
