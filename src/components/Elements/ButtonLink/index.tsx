import clsx from "clsx";
import NLink from "next/link";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Loader } from "src/components/Elements/Loader";

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const sizes = {
  xs: "text-xs px-1.5 py-1.5",
  sm: "text-sm px-2 py-2",
  md: "text-base px-2.5 py-2",
  lg: "text-lg px-2.5 py-2",
  xl: "text-xl px-3 py-2.5",
};

const rounded = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const themes = {
  primary: "bg-indigo-500 text-white hover:bg-indigo-600",
  secondary: "bg-pink-500 text-white hover:bg-pink-600",
  success: "bg-green-500 text-white hover:bg-green-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
  transparent: "bg-transparent border",
  dark: "bg-gray-800 text-white hover:bg-gray-900",
};

type IconProps =
  | { leftIcon: React.ReactElement; rightIcon?: never }
  | { rightIcon: React.ReactElement; leftIcon?: never }
  | { rightIcon?: undefined; leftIcon?: undefined };

export type LinkProps = {
  radius?: keyof typeof rounded;
  size?: keyof typeof sizes;
  loading?: boolean;
  loaderClassName?: string;
  theme?: keyof typeof themes;
  textClassName?: string;
} & IconProps &
  React.ComponentProps<typeof NLink>;

export const ButtonLink: FC<LinkProps> = ({
  className = "",
  radius = "md",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  loaderClassName = "",
  textClassName = "",
  theme = "transparent",
  ...props
}) => (
  <NLink
    className={twMerge(
      clsx(
        "flex items-center justify-center transition-transform duration-75 focus:outline-none active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:active:translate-y-0",
        sizes[size],
        rounded[radius],
        loading && "cursor-wait opacity-60",
        themes[theme],
        className
      )
    )}
    {...props}
  >
    {loading && (
      <Loader
        className={clsx(loaderClassName)}
        color="white"
        size={size}
        variant="oval"
      />
    )}
    {!loading && leftIcon}
    <span
      className={twMerge(
        clsx("mx-2 font-bold", textSizes[size], textClassName)
      )}
    >
      {props.children}
    </span>
    {loading && rightIcon}
  </NLink>
);
