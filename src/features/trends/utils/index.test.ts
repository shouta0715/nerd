import {
  getTrendTags,
  getTrendsTime,
  getWeightedCount,
} from "src/features/trends/utils";

describe("trends/utils", () => {
  describe("getTrendsTime", () => {
    test("string型を返す", () => {
      const trendingTime = getTrendsTime();

      expect(typeof trendingTime.shortTerm.from).toBe("string");
      expect(typeof trendingTime.shortTerm.to).toBe("string");
      expect(typeof trendingTime.midTerm.from).toBe("string");
      expect(typeof trendingTime.midTerm.to).toBe("string");
      expect(typeof trendingTime.longTerm.from).toBe("string");
      expect(typeof trendingTime.longTerm.to).toBe("string");
    });

    test("shortTermの差は5分", () => {
      const trendingTime = getTrendsTime();
      const shortTimeFrom = new Date(trendingTime.shortTerm.from);
      const shortTimeTo = new Date(trendingTime.shortTerm.to);
      const diff = shortTimeTo.getTime() - shortTimeFrom.getTime();

      expect(diff).toBe(5 * 60 * 1000);
    });

    test("midTermの差は30分", () => {
      const trendingTime = getTrendsTime();
      const midTermFrom = new Date(trendingTime.midTerm.from);
      const midTermTo = new Date(trendingTime.midTerm.to);
      const diff = midTermTo.getTime() - midTermFrom.getTime();

      expect(diff).toBe(30 * 60 * 1000);
    });

    test("longTermの差は24時間", () => {
      const trendingTime = getTrendsTime();
      const longTermFrom = new Date(trendingTime.longTerm.from);
      const longTermTo = new Date(trendingTime.longTerm.to);
      const diff = longTermTo.getTime() - longTermFrom.getTime();

      expect(diff).toBe(24 * 60 * 60 * 1000);
    });
  });

  describe("getWeightedCount", () => {
    test("short_countが1, mid_countが2, long_countが3の場合は3.6を返す", () => {
      const short_count = 1;
      const mid_count = 2;
      const long_count = 3;
      const expects = Math.floor(1 + 0.5 * 2 + 0.1 * 3);

      expect(getWeightedCount({ short_count, mid_count, long_count })).toBe(
        expects
      );
    });

    test("short_countが0, mid_countが0, long_countが0の場合は0を返す", () => {
      const short_count = 0;
      const mid_count = 0;
      const long_count = 0;
      const expects = 0;

      expect(getWeightedCount({ short_count, mid_count, long_count })).toBe(
        expects
      );
    });

    test("short_countがundefined, mid_countがundefined, long_countがundefinedの場合は0を返す", () => {
      const short_count = undefined;
      const mid_count = undefined;
      const long_count = undefined;
      const expects = 0;

      expect(getWeightedCount({ short_count, mid_count, long_count })).toBe(
        expects
      );
    });
    test("short_countがundefinedの場合はshort_countは0として計算する", () => {
      const short_count = undefined;
      const mid_count = 2;
      const long_count = 3;
      const expects = Math.floor(0 + 0.5 * 2 + 0.1 * 3);

      expect(getWeightedCount({ short_count, mid_count, long_count })).toBe(
        expects
      );
    });

    test("mid_countがundefinedの場合はmid_countは0として計算する", () => {
      const short_count = 1;
      const mid_count = undefined;
      const long_count = 3;
      const expects = Math.floor(1 + 0.5 * 0 + 0.1 * 3);

      expect(getWeightedCount({ short_count, mid_count, long_count })).toBe(
        expects
      );
    });

    test("long_countがundefinedの場合はlong_countは0として計算する", () => {
      const short_count = 1;
      const mid_count = 2;
      const long_count = undefined;
      const expects = Math.floor(1 + 0.5 * 2 + 0.1 * 0);
      expect(getWeightedCount({ short_count, mid_count, long_count })).toBe(
        expects
      );
    });
  });

  describe("getTrendTags", () => {
    test("weighted_countが100以上の場合は['トレンド', '急上昇']を返す", () => {
      const weighted_count = 100;
      const expects = ["トレンド", "急上昇"];

      expect(getTrendTags({ weighted_count })).toEqual(expects);
    });

    test("weighted_countが50以上の場合は['トレンド', '話題']を返す", () => {
      const weighted_count = 50;
      const expects = ["トレンド", "話題"];

      expect(getTrendTags({ weighted_count })).toEqual(expects);
    });

    test("weighted_countが1以上の場合は['トレンド']を返す", () => {
      const weighted_count = 1;
      const expects = ["トレンド"];

      expect(getTrendTags({ weighted_count })).toEqual(expects);
    });

    test("weighted_countが0の場合は['トレンド']を返す", () => {
      const weighted_count = 0;
      const expects = ["おすすめ"];

      expect(getTrendTags({ weighted_count })).toEqual(expects);
    });
  });
});
