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

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: keyof typeof sizes;
  radius?: keyof typeof rounded;
};

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
    <>
      <label className="sr-only" htmlFor={props.id ?? props.name ?? "input"}>
        {placeholder}
      </label>
      <input
        ref={ref}
        className={twMerge(
          clsx(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            sizes[inputSize],
            rounded[radius],
            className
          )
        )}
        placeholder={placeholder}
        type={props.type ?? "text"}
        value={value}
        {...props}
      />
    </>
  )
);
