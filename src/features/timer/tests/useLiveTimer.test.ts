import { renderHook } from "@testing-library/react";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";
import { LiveTimerProps } from "src/features/timer/types";

type DifTime = {
  difHours: number;
  difMinutes: number;
  difSeconds: number;
};

type Timer = {
  start_dif: DifTime;
  end_dif?: DifTime;
};

afterEach(() => {
  jest.useRealTimers();
});

const createDifTime = ({ start_dif, end_dif }: Timer) => {
  const isNotStart =
    start_dif?.difHours < 0 ||
    start_dif?.difMinutes < 0 ||
    start_dif?.difSeconds < 0;

  const today = new Date();

  if (isNotStart) {
    const start_time = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      today.getHours() + Math.abs(start_dif?.difHours),
      today.getMinutes() + Math.abs(start_dif?.difMinutes),
      today.getSeconds() + Math.abs(start_dif?.difSeconds)
    ).toISOString();

    const end_time = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      today.getHours() + Math.abs(end_dif?.difHours || start_dif.difHours),
      today.getMinutes() +
        Math.abs(end_dif?.difMinutes || start_dif.difMinutes),
      today.getSeconds() + Math.abs(end_dif?.difSeconds || start_dif.difSeconds)
    ).toISOString();

    return { start_time, end_time };
  }

  const start_time = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours() - start_dif.difHours,
    today.getMinutes() - start_dif.difMinutes,
    today.getSeconds() - start_dif.difSeconds
  ).toISOString();

  const end_time = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours() + (end_dif?.difHours || start_dif.difHours),
    today.getMinutes() + (end_dif?.difMinutes || start_dif.difMinutes),
    today.getSeconds() + (end_dif?.difSeconds || start_dif.difSeconds)
  ).toISOString();

  return { start_time, end_time };
};

const setup = ({ start_time, end_time }: LiveTimerProps) => {
  const { result } = renderHook(() =>
    useLiveTimer({
      start_time,
      end_time,
    })
  );

  return result.current;
};

describe("useLiveTimer", () => {
  test("difを設定するとmode=upでその時間が設定される", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: 1, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode, time } = setup({ start_time, end_time });

    expect(mode).toBe("up");

    expect(time).toEqual({
      hours: difTime.start_dif.difHours,
      minutes: difTime.start_dif.difMinutes,
      seconds: difTime.start_dif.difSeconds,
    });
  });

  test("defにマイナスを設定するとmode=downでその時間が設定される", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: -10, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("down");
  });

  test("difの経過後modeがupからfinishに変わり、timeが0になっている", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: 0, difSeconds: 1 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("up");

    jest.useFakeTimers();

    jest.advanceTimersByTime(1000);

    const { mode: m, time: t } = setup({ start_time, end_time });

    expect(t).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(m).toBe("finish");
  });

  test("difを1分30のとき,modeがdownで30秒経過すると59になる", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: -1, difSeconds: 30 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("down");

    jest.useFakeTimers();

    jest.advanceTimersByTime(30000);

    const { time: t } = setup({ start_time, end_time });

    expect(t).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 59,
    });
  });

  test("modeがdownのときdifの経過後にmodeがupに変更される", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: -1, difSeconds: 0 },
      end_dif: { difHours: 0, difMinutes: 5, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("down");

    jest.useFakeTimers();

    jest.advanceTimersByTime(120000);

    const { mode: m } = setup({ start_time, end_time });

    expect(m).toBe("up");
  });

  test("start_timeかend_timeがnullならmodeはNotRegister", () => {
    const { mode } = setup({ start_time: null, end_time: null });

    expect(mode).toBe("notRegister");
  });

  test("mode=upのとき一秒ずつ増える", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: 0, difSeconds: 0 },
      end_dif: { difHours: 1, difMinutes: 30, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("up");

    jest.useFakeTimers();

    jest.advanceTimersByTime(1000 * 60 * 60 + 1000 * 120);

    const { time: t } = setup({ start_time, end_time });

    expect(t).toEqual({
      hours: 1,
      minutes: 2,
      seconds: 0,
    });
  });

  test("mode=downのとき一秒ずつ減る", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: -1, difSeconds: 0 },
      end_dif: { difHours: 0, difMinutes: 0, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("down");

    jest.useFakeTimers();

    jest.advanceTimersByTime(1000);

    const { time: t } = setup({ start_time, end_time });

    expect(t).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 58,
    });
  });

  test('4時間以上のとき"0時間 0分 0秒"となるmode=finishになる', () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: 0, difSeconds: 0 },
      end_dif: { difHours: 4, difMinutes: 0, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("up");

    jest.useFakeTimers();

    jest.advanceTimersByTime(1000 * 60 * 60 * 4);

    const { time: t } = setup({ start_time, end_time });

    expect(t).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    jest.advanceTimersByTime(1000);

    const { mode: m } = setup({ start_time, end_time });

    expect(m).toBe("finish");
  });

  test("mode=downのときにhours === 0 && minutes === 0 && seconds === 0になるとmode=upになる", () => {
    const difTime: Timer = {
      start_dif: { difHours: 0, difMinutes: -1, difSeconds: 0 },
      end_dif: { difHours: 1, difMinutes: 1, difSeconds: 0 },
    };
    const { start_time, end_time } = createDifTime(difTime);

    const { mode } = setup({ start_time, end_time });

    expect(mode).toBe("down");

    jest.useFakeTimers();

    jest.advanceTimersByTime(1000 * 60);

    const { mode: m } = setup({ start_time, end_time });

    expect(m).toBe("up");
  });
});
