import clsx from "clsx";
import React from "react";
import ReactTextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import { twMerge } from "tailwind-merge";

const rounded = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

type TextareaProps = TextareaAutosizeProps & {
  radius?: keyof typeof rounded;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", radius = "md", ...rest }, ref) => {
    return (
      <ReactTextareaAutosize
        ref={ref}
        className={twMerge(
          clsx(
            `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
            rounded[radius],
            className
          )
        )}
        {...rest}
      />
    );
  }
);
