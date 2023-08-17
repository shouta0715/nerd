import { NoticePage } from "src/libs/next/types";

type Importance = NoticePage["markdowns"][0]["importance"];

export const getImportanceColor = (importance: Importance) => {
  switch (importance) {
    case "high":
      return "bg-red-50 text-red-600";
    case "middle":
      return "bg-amber-50 text-amber-600";
    case "low":
      return "bg-blue-50 text-blue-600";
    default:
      return "bg-gray-50 text-gray-800";
  }
};
