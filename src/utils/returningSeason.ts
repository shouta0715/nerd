import { utcToZonedTime } from "date-fns-tz";

type Season = "WINTER" | "SPRING" | "SUMMER" | "AUTUMN";

type SeasonDate = {
  year: number;
  season: Season;
};

export const returningSeason = (): SeasonDate => {
  const today = utcToZonedTime(new Date(), "Asia/Tokyo");

  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  if (month >= 1 && month <= 3) return { year, season: "WINTER" };

  if (month >= 4 && month <= 6) return { year, season: "SPRING" };

  if (month >= 7 && month <= 9) return { year, season: "SUMMER" };

  if (month >= 10 && month <= 12) return { year, season: "AUTUMN" };

  return { year, season: "WINTER" };
};
