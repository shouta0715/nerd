import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Loader } from "src/components/Elements/Loader/Loader";

const sizes = {
  xs: "text-xs px-1.5 py-1",
  sm: "text-sm px-2.5 py-1.5",
  md: "text-base px-3.5 py-2.5",
  lg: "text-lg px-4 py-3.5",
  xl: "text-xl px-6 py-5",
};

const rounded = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

type IconProps =
  | { leftIcon: React.ReactElement; rightIcon?: never }
  | { rightIcon: React.ReactElement; leftIcon?: never }
  | { rightIcon?: undefined; leftIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  radius?: keyof typeof rounded;
  size?: keyof typeof sizes;
  loading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      radius = "md",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={twMerge(
        clsx(
          "flex items-center justify-center border transition-transform duration-75 focus:outline-none active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:active:translate-y-0",
          sizes[size],
          rounded[radius],
          className
        )
      )}
      {...props}
    >
      {loading && <Loader size="sm" variant="oval" />}
      {loading && leftIcon}
      <span className="mx-2">{props.children}</span> {loading && rightIcon}
    </button>
  )
);
