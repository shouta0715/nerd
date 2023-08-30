import { getTrendingTime } from "src/features/trends/utils";

describe("getTrendingTime", () => {
  test("string型を返す", () => {
    const trendingTime = getTrendingTime();

    expect(typeof trendingTime.shortTerm.from).toBe("string");
    expect(typeof trendingTime.shortTerm.to).toBe("string");
    expect(typeof trendingTime.midTerm.from).toBe("string");
    expect(typeof trendingTime.midTerm.to).toBe("string");
    expect(typeof trendingTime.longTerm.from).toBe("string");
    expect(typeof trendingTime.longTerm.to).toBe("string");
  });

  test("shortTermの差は5分", () => {
    const trendingTime = getTrendingTime();
    const shortTimeFrom = new Date(trendingTime.shortTerm.from);
    const shortTimeTo = new Date(trendingTime.shortTerm.to);
    const diff = shortTimeTo.getTime() - shortTimeFrom.getTime();

    expect(diff).toBe(5 * 60 * 1000);
  });

  test("midTermの差は30分", () => {
    const trendingTime = getTrendingTime();
    const midTermFrom = new Date(trendingTime.midTerm.from);
    const midTermTo = new Date(trendingTime.midTerm.to);
    const diff = midTermTo.getTime() - midTermFrom.getTime();

    expect(diff).toBe(30 * 60 * 1000);
  });

  test("longTermの差は24時間", () => {
    const trendingTime = getTrendingTime();
    const longTermFrom = new Date(trendingTime.longTerm.from);
    const longTermTo = new Date(trendingTime.longTerm.to);
    const diff = longTermTo.getTime() - longTermFrom.getTime();

    expect(diff).toBe(24 * 60 * 60 * 1000);
  });
});
