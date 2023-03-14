import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
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

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: keyof typeof sizes;
  radius?: keyof typeof rounded;
} & IconProps;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      value,
      className,
      inputSize = "md",
      radius = "md",
      ...props
    },
    ref
  ) => (
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      value={value}
      className={twMerge(
        clsx(
          "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
          sizes[inputSize],
          rounded[radius],
          className
        )
      )}
      {...props}
    />
  )
);
