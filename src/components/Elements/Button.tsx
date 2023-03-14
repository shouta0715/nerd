import clsx from "clsx";
import React from "react";
import { Loader } from "src/components/Elements/Loader/Loader";

const sizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-6 text-lg",
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
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      radius = "md",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        "flex items-center justify-center border transition-transform duration-75 focus:outline-none active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:active:translate-y-0",
        sizes[size],
        rounded[radius],
        className
      )}
      {...props}
    >
      {isLoading && <Loader size="sm" variant="oval" />}
      {!isLoading && leftIcon}
      <span className="mx-2">{props.children}</span> {!isLoading && rightIcon}
    </button>
  )
);
