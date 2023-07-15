import { getInitialTime } from "src/features/timer/utils/getInitialTime";

describe("getInitialTime", () => {
  test("start_timeがない場合は0時間0分0秒", () => {
    expect(
      getInitialTime({
        start_time: null,
        end_time: "2021-01-01T00:00:00.000Z",
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("end_timeがない場合は0時間0分0秒", () => {
    expect(
      getInitialTime({
        start_time: "2021-01-01T00:00:00.000Z",
        end_time: null,
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("start_timeが現在時刻より後の場合は差分時間", () => {
    const now = new Date();
    const start = new Date(now.getTime() + 1000);
    const end = new Date(now.getTime() + 2000);
    expect(
      getInitialTime({
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 1 });
  });
  test("end_timeが現在時刻より前の場合は0時間0分0秒", () => {
    const now = new Date();
    const start = new Date(now.getTime() - 2000);
    const end = new Date(now.getTime() - 1000);
    expect(
      getInitialTime({
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("start_timeが現在時刻より前、end_timeが現在時刻より後の場合は差分時間", () => {
    const now = new Date();
    const start = new Date(now.getTime() - 1000);
    const end = new Date(now.getTime() + 1000);
    expect(
      getInitialTime({
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 1 });
  });
});
