export const variants = {
  oval: "oval",
  dots: "dots",
};

export const colors = {
  indigo: "fill-indigo-500 stroke-indigo-500",
  blue: "fill-blue-500 stroke-blue-500",
  green: "fill-green-500 stroke-green-500",
  yellow: "fill-yellow-500 stroke-yellow-500",
  red: "fill-red-500 stroke-red-500",
  gray: "fill-gray-500 stroke-gray-500",
  white: "fill-white stroke-white",
};

export const sizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

export type LoaderProps = {
  variant?: keyof typeof variants;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  className?: string;
};
