import { Categories_Enum } from "../../generated/graphql";

export const categoryProcessing = (
  category?: Categories_Enum | null
): {
  ja: string;
  en: string;
  color: string;
} => {
  switch (category) {
    case Categories_Enum.Anime:
      return {
        ja: "アニメ",
        en: "Anime",
        color: "teal",
      };

    case Categories_Enum.Movie:
      return {
        ja: "映画",
        en: "Movie",
        color: "blue",
      };

    case Categories_Enum.Music:
      return {
        ja: "音楽",
        en: "Music",
        color: "yellow",
      };

    case Categories_Enum.Doujinshi:
      return {
        ja: "同人誌",
        en: "Doujinshi",
        color: "pink",
      };

    case Categories_Enum.Drama:
      return {
        ja: "ドラマ",
        en: "Drama",
        color: "gray",
      };

    case Categories_Enum.Manga:
      return {
        ja: "漫画",
        en: "Manga",
        color: "orange",
      };

    case Categories_Enum.Tv:
      return {
        ja: "テレビ",
        en: "TV",
        color: "grape",
      };

    case Categories_Enum.WeeklyMagazine:
      return {
        ja: "週刊誌",
        en: "Weekly Magazine",
        color: "cyan",
      };

    case Categories_Enum.Youtube:
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
