import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Loader } from "src/components/Elements/Loader";

const rounded = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

type Props = {
  src: string;
  alt: string;
  className?: string;
  radius?: keyof typeof rounded;
  isLoading?: boolean;
  height?: number;
  width?: number;
};

export const Image = ({
  src,
  alt,
  radius = "full",
  className = "",
  isLoading = false,
  height = 38,
  width = 38,
}: Props) => {
  return isLoading ? (
    <Loader size="xl" />
  ) : (
    <picture
      className={twMerge(
        clsx(
          "inline-block aspect-square object-cover",
          rounded[radius],
          className
        )
      )}
      style={{ height, width }}
    >
      <source srcSet={src} type="image/webp" />
      <img
        alt={alt}
        className={twMerge(clsx("h-full w-full", rounded[radius], className))}
        height={height}
        loading="lazy"
        src={src}
        width={width}
      />
    </picture>
  );
};
