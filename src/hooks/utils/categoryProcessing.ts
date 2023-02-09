import { GetMediaTypesQuery } from "../../generated/graphql";

type args = GetMediaTypesQuery["media_types"][0];

export const categoryProcessing = (
  media?: args
): {
  ja: string;
  en: string;
  color: string;
} => {
  switch (media?.id) {
    case 1:
      return {
        ja: "アニメ",
        en: "Anime",
        color: "teal",
      };

    case 2:
      return {
        ja: "漫画",
        en: "Manga",
        color: "orange",
      };

    case 3:
      return {
        ja: "同人誌",
        en: "Doujinshi",
        color: "pink",
      };

    case 4:
      return {
        ja: "映画",
        en: "Movie",
        color: "blue",
      };

    default:
      return {
        ja: "その他",
        en: "Other",
        color: "gray",
      };
  }
};
