import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Loader } from "src/components/Elements/Loader";

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-sm",
  xl: "text-sm",
};

const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-2 py-1 text-sm",
  md: "px-2.5 py-1.5 text-sm",
  lg: "px-3 py-2 text-sm",
  xl: "px-3.5 py-2.5 text-sm",
};

const rounded = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const themes = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
  secondary:
    "bg-pink-600 text-white hover:bg-pink-500 focus-visible:outline-pink-600",
  success:
    "bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600",
  danger:
    "bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600",
  transparent: "bg-transparent ",
  dark: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-gray-900",
};

type IconProps =
  | { leftIcon: React.ReactElement; rightIcon?: never }
  | { rightIcon: React.ReactElement; leftIcon?: never }
  | { rightIcon?: undefined; leftIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  radius?: keyof typeof rounded;
  size?: keyof typeof sizes;
  loading?: boolean;
  loaderClassName?: string;
  theme?: keyof typeof themes;
  textClassName?: string;
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
      loaderClassName,
      textClassName = "",
      theme = "transparent",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      aria-busy={loading}
      className={twMerge(
        clsx(
          "flex items-center justify-center border transition-transform duration-75 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:active:translate-y-0",
          sizes[size],
          rounded[radius],
          themes[theme],
          loading && "cursor-wait opacity-60",
          className
        )
      )}
      disabled={loading}
      type={type}
      {...props}
    >
      {loading && (
        <Loader
          className={clsx(loaderClassName)}
          size={size}
          theme="white"
          variant="oval"
        />
      )}
      {!loading && leftIcon}
      <span
        className={twMerge(
          clsx("mx-2 font-semibold", textSizes[size], textClassName)
        )}
      >
        {props.children}
      </span>
      {loading && rightIcon}
    </button>
  )
);
