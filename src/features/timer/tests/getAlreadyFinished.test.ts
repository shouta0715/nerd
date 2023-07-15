import { getIsAlreadyFinished } from "src/features/timer/utils/getAlreadyFinished";

describe("getAlreadyFinished", () => {
  test("end_timeがない場合はfalse", () => {
    expect(getIsAlreadyFinished(null)).toBe(false);
  });

  test("end_timeが現在時刻より前の場合はtrue", () => {
    const now = new Date();
    const end = new Date(now.getTime() - 1000);

    expect(getIsAlreadyFinished(end.toISOString())).toBe(true);
  });

  test("end_timeが現在時刻より後の場合はfalse", () => {
    const now = new Date();
    const end = new Date(now.getTime() + 1000);

    expect(getIsAlreadyFinished(end.toISOString())).toBe(false);
  });
});
