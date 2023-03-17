import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { colors, LoaderProps, sizes } from "src/components/Elements/Loader";

export const Oval = ({
  color = "indigo",
  size = "md",
  className = "",
}: LoaderProps) => (
  <svg
    className={twMerge(clsx(colors[color], sizes[size], className))}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <g strokeWidth="5" transform="translate(2.5 2.5)">
        <circle cx="16" cy="16" r="16" strokeOpacity=".5" />
        <path d="M32 16c0-9.94-8.06-16-16-16">
          <animateTransform
            attributeName="transform"
            dur="1s"
            from="0 16 16"
            repeatCount="indefinite"
            to="360 16 16"
            type="rotate"
          />
        </path>
      </g>
    </g>
  </svg>
);
