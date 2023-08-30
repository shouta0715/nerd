import { LiveTimer } from "src/features/timer/types";
import { GetTrendsBadge, Term, TrendingTime } from "src/features/trends/types";
import { GetTrendsQueryVariables } from "src/gql/graphql";

export const getTrendsTime = (): TrendingTime => {
  const now = new Date();
  const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
  const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  const shortTerm: Term = {
    from: fiveMinutesAgo.toISOString(),
    to: now.toISOString(),
  };

  const midTerm: Term = {
    from: thirtyMinutesAgo.toISOString(),
    to: now.toISOString(),
  };

  const longTerm: Term = {
    from: oneDayAgo.toISOString(),
    to: now.toISOString(),
  };

  return {
    shortTerm,
    midTerm,
    longTerm,
  };
};

export const getTrendsVariables = (): GetTrendsQueryVariables => {
  const { shortTerm, midTerm, longTerm } = getTrendsTime();

  return {
    limit: 30,
    short_term_from: shortTerm.from,
    short_term_to: shortTerm.to,
    mid_term_from: midTerm.from,
    mid_term_to: midTerm.to,
    long_term_from: longTerm.from,
    long_term_to: longTerm.to,
  };
};

export const getWeightedCount = ({
  short_count,
  mid_count,
  long_count,
}: {
  short_count?: number;
  mid_count?: number;
  long_count?: number;
}): number => {
  return Math.floor(
    (short_count ?? 0) + 0.5 * (mid_count ?? 0) + 0.1 * (long_count ?? 0)
  );
};

export const getTrendTags = ({
  weighted_count,
}: {
  weighted_count: number;
}): string[] => {
  if (weighted_count >= 100) {
    return ["トレンド", "急上昇"];
  }

  if (weighted_count >= 50) {
    return ["トレンド", "話題"];
  }

  if (weighted_count) {
    return ["トレンド"];
  }

  return ["おすすめ"];
};

export const getTrendsBadge = ({
  start_time,
  end_time,
  mode,
}: {
  mode: LiveTimer["mode"];
  end_time: string;
  start_time: string;
}): GetTrendsBadge => {
  if (mode === "finish" || mode === "notRegister")
    return {
      badge: null,
      color: null,
      isBadge: false,
    };

  const now = new Date();
  const endTime = new Date(end_time);
  const startTime = new Date(start_time);

  if (mode === "up") {
    if (now.getTime() > endTime.getTime() - 5 * 60 * 1000) {
      return {
        badge: "もうすぐ終了",
        color: "bg-red-50 text-pink-700 ring-red-500/10",
        isBadge: true,
      };
    }

    return {
      badge: "開始中",
      color: "bg-orange-50 text-orange-700 ring-orange-500/10",
      isBadge: true,
    };
  }

  if (now.getTime() > startTime.getTime() - 30 * 60 * 1000) {
    return {
      badge: "もうすぐ開始",
      color: "bg-indigo-50 text-indigo-700 ring-indigo-500/10",
      isBadge: true,
    };
  }

  return {
    badge: null,
    color: null,
    isBadge: false,
  };
};
