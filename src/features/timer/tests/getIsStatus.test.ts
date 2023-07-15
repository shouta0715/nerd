import { getIsStatus } from "src/features/timer/utils/getIsStatus";

describe("getIsStatus", () => {
  test("start_timeがない場合はnotRegister", () => {
    expect(
      getIsStatus({ start_time: null, end_time: "2021-01-01T00:00:00.000Z" })
    ).toBe("notRegister");
  });
  test("end_timeがない場合はnotRegister", () => {
    expect(
      getIsStatus({ start_time: "2021-01-01T00:00:00.000Z", end_time: null })
    ).toBe("notRegister");
  });
  test("start_timeが現在時刻より後の場合はdown", () => {
    const now = new Date();
    const start = new Date(now.getTime() + 1000);
    const end = new Date(now.getTime() + 2000);
    expect(
      getIsStatus({
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      })
    ).toBe("down");
  });
  test("end_timeが現在時刻より前の場合はfinish", () => {
    const now = new Date();
    const start = new Date(now.getTime() - 2000);
    const end = new Date(now.getTime() - 1000);
    expect(
      getIsStatus({
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      })
    ).toBe("finish");
  });
  test("start_timeが現在時刻より前、end_timeが現在時刻より後の場合はup", () => {
    const now = new Date();
    const start = new Date(now.getTime() - 1000);
    const end = new Date(now.getTime() + 1000);
    expect(
      getIsStatus({
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      })
    ).toBe("up");
  });
});
