import { useCallback } from "react";
import { Categories_Enum } from "../../generated/graphql";

export const useCategoryToJa = () => {
  const categoryToJa = useCallback((category: Categories_Enum | null) => {
    switch (category) {
      case Categories_Enum.Anime:
        return "アニメ";

      case Categories_Enum.Movie:
        return "映画";

      default:
        return "その他";
    }
  }, []);

  return { categoryToJa };
};
