import { Category_Enum } from "../../generated/graphql";

export const categoryProcessing = (
  category?: Category_Enum | null
): {
  ja: string;
  en: string;
  color: string;
} => {
  switch (category) {
    case Category_Enum.Anime:
      return {
        ja: "アニメ",
        en: "Anime",
        color: "teal",
      };

    case Category_Enum.Movie:
      return {
        ja: "映画",
        en: "Movie",
        color: "blue",
      };

    case Category_Enum.Music:
      return {
        ja: "音楽",
        en: "Music",
        color: "yellow",
      };

    case Category_Enum.Doujinshi:
      return {
        ja: "同人誌",
        en: "Doujinshi",
        color: "pink",
      };

    case Category_Enum.Drama:
      return {
        ja: "ドラマ",
        en: "Drama",
        color: "dark",
      };

    case Category_Enum.Manga:
      return {
        ja: "漫画",
        en: "Manga",
        color: "orange",
      };

    case Category_Enum.Tv:
      return {
        ja: "テレビ",
        en: "TV",
        color: "grape",
      };

    case Category_Enum.WeeklyMagazine:
      return {
        ja: "週刊誌",
        en: "Weekly Magazine",
        color: "cyan",
      };

    case Category_Enum.Youtube:
      return {
        ja: "YouTube",
        en: "YouTube",
        color: "red",
      };

    default:
      return {
        ja: "その他",
        en: "Other",
        color: "gray",
      };
  }
};
