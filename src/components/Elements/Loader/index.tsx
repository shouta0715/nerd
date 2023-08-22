import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const sizes = {
  xs: "h-2 w-2",
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
};

const themes = {
  primary: "stroke-indigo-600 fill-indigo-600",
  secondary: "stroke-pink-600 fill-pink-600",
  success: "stroke-green-600 fill-green-600",
  danger: "stroke-red-600 fill-red-600",
  warning: "stroke-yellow-600 fill-yellow-600",
  transparent: "stroke-transparent fill-transparent",
  white: "stroke-white fill-white",
};

type Variants = "oval" | "dots";

export type LoaderProps = {
  size?: keyof typeof sizes;
  theme?: keyof typeof themes;
  variant?: Variants;
  className?: string;
};

export const Loader = ({
  size = "md",
  theme = "primary",
  variant = "oval",
  className,
}: LoaderProps) => {
  return variant === "oval" ? (
    <>
      <span className="sr-only" role="status">
        loading...
      </span>
      <svg
        aria-hidden="true"
        className={twMerge(clsx(themes[theme], sizes[size], className))}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="spinner_V8m1">
          <circle cx="12" cy="12" fill="none" r="9.5" strokeWidth="3" />
        </g>
      </svg>
    </>
  ) : (
    <svg
      aria-hidden="true"
      className={twMerge(clsx(themes[theme], sizes[size], className))}
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="15"
          repeatCount="indefinite"
          to="15"
          values="15;9;15"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        />
      </circle>
      <circle cx="60" cy="15" fillOpacity="0.3" r="9">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="9"
          repeatCount="indefinite"
          to="9"
          values="9;15;9"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="0.5"
          repeatCount="indefinite"
          to="0.5"
          values=".5;1;.5"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="15"
          repeatCount="indefinite"
          to="15"
          values="15;9;15"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        />
      </circle>
    </svg>
  );
};
