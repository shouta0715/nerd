/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const rounded = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const families = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
  "Hiragino Sans": "font-hiragino-sans",
  futura: "font-futura",
};

const fontWeights = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const leadings = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
};

const textAligns = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  inherit: "text-inherit",
};

const verticalAligns = {
  baseline: "align-baseline",
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
  texttop: "align-text-top",
  textbottom: "align-text-bottom",
};

type TextProps = {
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  size?: keyof typeof sizes;
  ff?: keyof typeof families;
  fw?: keyof typeof fontWeights;
  lh?: keyof typeof leadings;
  align?: keyof typeof textAligns;
  valign?: keyof typeof verticalAligns;
  children?: React.ReactNode;
  radius?: keyof typeof rounded;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onCopy">;

export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      component = "div",
      size = "md",
      ff = "futura",
      fw = "normal",
      lh = "normal",
      align = "left",
      valign = "baseline",
      radius = "none",
      children,
      className = "",
      ...rest
    },
    ref
  ) => {
    const Component = component;

    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            sizes[size],
            families[ff],
            fontWeights[fw],
            leadings[lh],
            textAligns[align],
            verticalAligns[valign],
            rounded[radius],
            className
          )
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
