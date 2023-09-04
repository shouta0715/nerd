import {
  formatTimeDistance,
  secondToTime,
  timeCommented,
  timeToPadTime,
} from "src/features/timer/utils/timeProcessing";

describe("timeProcessing", () => {
  describe("secondToTime", () => {
    test("秒数を入れると時間、分、秒に変換されること", () => {
      expect(secondToTime(3600)).toEqual({ hours: 1, minutes: 0, seconds: 0 });
      expect(secondToTime(60)).toEqual({ hours: 0, minutes: 1, seconds: 0 });
      expect(secondToTime(1)).toEqual({ hours: 0, minutes: 0, seconds: 1 });
    });
  });
  describe("timeCommented", () => {
    test("1分未満の場合秒が付与される", () => {
      expect(timeCommented(59)).toBe("59秒");
    });

    test("1分以上の場合分が付与される", () => {
      expect(timeCommented(60)).toBe("1分 0秒");
    });

    test("1時間以上の場合時間が付与される", () => {
      expect(timeCommented(3600)).toBe("1時間 0秒");
    });
  });

  describe("formatTimeDistance", () => {
    test("formatDistanceに約が消去されること", () => {
      const onYearAgo = new Date();
      onYearAgo.setFullYear(onYearAgo.getFullYear() - 1);

      expect(formatTimeDistance(onYearAgo.toISOString())).toBe("1年前");

      const onMonthAgo = new Date();
      onMonthAgo.setMonth(onMonthAgo.getMonth() - 1);

      expect(formatTimeDistance(onMonthAgo.toISOString())).toBe("1か月前");

      const onDayAgo = new Date();
      onDayAgo.setDate(onDayAgo.getDate() - 1);

      expect(formatTimeDistance(onDayAgo.toISOString())).toBe("1日前");
    });
  });

  describe("timeToPadTime", () => {
    test("時間、分、秒が2桁になること", () => {
      expect(timeToPadTime({ hours: 1, minutes: 1, seconds: 1 })).toBe(
        "010101"
      );

      expect(timeToPadTime({ hours: 10, minutes: 10, seconds: 10 })).toBe(
        "101010"
      );
    });
  });
});
