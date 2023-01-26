import { Categories_Enum } from "../../generated/graphql";

export const categoryToJa = (category?: Categories_Enum | null) => {
  switch (category) {
    case Categories_Enum.Anime:
      return "アニメ";

    case Categories_Enum.Movie:
      return "映画";

    case Categories_Enum.Music:
      return "音楽";

    case Categories_Enum.Doujinshi:
      return "同人誌";

    case Categories_Enum.Drama:
      return "ドラマ";

    case Categories_Enum.Manga:
      return "漫画";

    case Categories_Enum.Tv:
      return "テレビ";

    case Categories_Enum.WeeklyMagazine:
      return "週刊誌";

    case Categories_Enum.Youtube:
      return "YouTube";

    default:
      return "その他";
  }
};
