import { getMaxCountUpTime } from "src/features/timer/utils/getMaxCountUpTime";

describe("getMaxCountUpTime", () => {
  test("end_timeがない場合は0時間0分0秒", () => {
    expect(
      getMaxCountUpTime({
        start_time: "2021-01-01T00:00:00.000Z",
        end_time: null,
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("start_timeがない場合は0時間0分0秒", () => {
    expect(
      getMaxCountUpTime({
        start_time: null,
        end_time: "2021-01-01T00:00:00.000Z",
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("end_timeがstart_timeより前の場合は0時間0分0秒", () => {
    expect(
      getMaxCountUpTime({
        start_time: "2021-01-01T00:00:00.000Z",
        end_time: "2020-01-01T00:00:00.000Z",
      })
    ).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
  test("end_timeがstart_timeより後の場合は差分時間", () => {
    expect(
      getMaxCountUpTime({
        start_time: "2021-01-01T00:00:00.000Z",
        end_time: "2021-01-01T01:00:00.000Z",
      })
    ).toEqual({ hours: 1, minutes: 0, seconds: 0 });
  });
});
