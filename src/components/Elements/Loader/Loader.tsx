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
    <Oval color={color} size={size} className={className} />
  ) : (
    <Dots color={color} size={size} className={className} />
  );
