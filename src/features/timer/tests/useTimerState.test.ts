import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useTimerState } from "src/features/timer/store";

const setup = (ms = 0) => {
  const { result } = renderHook(() => useTimerState());

  act(() => {
    const intervalId = setInterval(() => {
      result.current.intervalTime();
    }, 1000);
    jest.advanceTimersByTime(ms);
    clearInterval(intervalId);
  });

  return result.current;
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("useTimerState hooks", () => {
  test("最初のtimeは0 modeはup", () => {
    const { time, mode } = setup();
    expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    expect(mode).toEqual("up");
  });

  test("changeModeでmodeが変わる", () => {
    const { mode, changeMode } = setup();
    expect(mode).toEqual("up");

    act(() => {
      changeMode();
    });

    const { mode: m } = setup(0);
    expect(m).toEqual("down");
  });

  describe("up", () => {
    test("1秒ずつ増える", () => {
      const { mode, time } = setup();
      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      const { time: t } = setup(2000);

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 2 });
    });

    test("1分30秒にもなる", () => {
      const { mode, time } = setup();
      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      const { time: t } = setup(90000);

      expect(t).toEqual({ hours: 0, minutes: 1, seconds: 30 });
    });

    test("1時間11分15秒にもなる", () => {
      const { mode, time } = setup();
      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      const { time: t } = setup(4275000);

      expect(t).toEqual({ hours: 1, minutes: 11, seconds: 15 });
    });

    test("4時間00分00秒になったら止まる", () => {
      const { mode, time, interval } = setup();
      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      const { time: t } = setup(14400001);

      expect(interval.active).toBeFalsy();
      expect(t).toEqual({ hours: 4, minutes: 0, seconds: 0 });
    });
  });

  describe("down", () => {
    test("downは1秒ずつ減る", () => {
      const { mode, time, changeMode, setDownInitialTime } = setup();

      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 0, minutes: 0, seconds: 10 });
        changeMode();
      });

      const { mode: m } = setup();

      expect(m).toEqual("down");

      const { time: t } = setup(5000);

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 5 });
    });

    test("downは1分30秒にもなる", () => {
      const { mode, time, changeMode, setDownInitialTime } = setup();

      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 0, minutes: 3, seconds: 0 });

        changeMode();
      });

      const { mode: m } = setup();

      expect(m).toEqual("down");

      const { time: t } = setup(90000);

      expect(t).toEqual({ hours: 0, minutes: 1, seconds: 30 });
    });

    test("downは1時間15分00秒にもなる", () => {
      const { mode, time, changeMode, setDownInitialTime } = setup();

      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 3, minutes: 0, seconds: 0 });

        changeMode();
      });

      const { mode: m } = setup();

      expect(m).toEqual("down");

      const { time: t } = setup(6300000);

      expect(t).toEqual({ hours: 1, minutes: 15, seconds: 0 });
    });

    test("downは0秒になったら止まる", () => {
      const { mode, time, changeMode, setDownInitialTime } = setup();

      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 0, minutes: 0, seconds: 3 });

        changeMode();
      });

      const { mode: m } = setup();

      expect(m).toEqual("down");

      const { time: t, interval } = setup(3000);

      expect(interval.active).toBeFalsy();
      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    test("downは0秒を下回ったら止まる", () => {
      const { mode, time, changeMode, setDownInitialTime } = setup();

      expect(mode).toEqual("up");

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 0, minutes: 0, seconds: 3 });

        changeMode();
      });

      const { mode: m } = setup();

      expect(m).toEqual("down");

      const { time: t, interval } = setup(4000);

      expect(interval.active).toBeFalsy();
      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });
  });

  describe("setTime", () => {
    test("setTimeでtimeが設定される", () => {
      const { time, setTime } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 1, seconds: 1 });
    });

    test("setTimeでtimeが0になったら止まる", () => {
      const { time, setTime, interval } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
      });

      const { time: t } = setup();

      expect(interval.active).toBeFalsy();
      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    test("setTimeでtimeが4時間を設定したら4時間になる", () => {
      const { time, setTime, interval } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setTime({ hours: 4, minutes: 0, seconds: 1 });
      });

      const { time: t } = setup();

      expect(interval.active).toBeFalsy();
      expect(t).toEqual({ hours: 4, minutes: 0, seconds: 0 });
    });

    test("マイナスの場合は0になる", () => {
      const { time, setTime } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setTime({ hours: -1, minutes: -1, seconds: -1 });
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    test("setDownInitialTimeを超えたらdownInitialTimeになる", () => {
      const { time, setTime, setDownInitialTime, changeMode } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 1, minutes: 1, seconds: 1 });
        changeMode();
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 2 });
      });

      const { time: t2 } = setup();

      expect(t2).toEqual({ hours: 1, minutes: 1, seconds: 1 });
    });
  });

  describe("setDownInitialTime", () => {
    test("setDownInitialTimeでdownInitialTimeが設定される", () => {
      const { downInitialTime, setDownInitialTime } = setup();

      expect(downInitialTime).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { downInitialTime: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 1, seconds: 1 });
    });

    test("setDownInitialTimeでdownInitialTimeが4時間超えを設定したら4時間になる", () => {
      const { downInitialTime, setDownInitialTime } = setup();

      expect(downInitialTime).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 4, minutes: 0, seconds: 1 });
      });

      const { downInitialTime: t } = setup();

      expect(t).toEqual({ hours: 4, minutes: 0, seconds: 0 });
    });
  });

  describe("resetTime", () => {
    test("resetTimeでtimeが0になる", () => {
      const { resetTime, setTime } = setup();

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        resetTime();
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    test("resetTimeでdownInitialTimeが0になる", () => {
      const { downInitialTime, setDownInitialTime, resetTime } = setup();

      expect(downInitialTime).toEqual({ hours: 0, minutes: 0, seconds: 0 });

      act(() => {
        setDownInitialTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { downInitialTime: t1 } = setup();

      expect(t1).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        resetTime();
      });

      const { downInitialTime: t } = setup();

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    test("resetTimeでmodeがupになる", () => {
      const { mode, resetTime } = setup();

      expect(mode).toEqual("up");

      act(() => {
        resetTime();
      });

      const { mode: m } = setup();

      expect(m).toEqual("up");
    });
  });

  describe("oneMore", () => {
    test("onMoreでtimeが0に戻される。downInitialTimeはそのまま", () => {
      const { oneMore, setTime, setDownInitialTime } = setup();

      const down = { hours: 1, minutes: 1, seconds: 1 };

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 1 });
        setDownInitialTime(down);
      });

      const { time, downInitialTime } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });
      expect(downInitialTime).toEqual(down);

      act(() => {
        oneMore();
      });

      const { time: t, downInitialTime: dt } = setup();

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
      expect(dt).toEqual(down);
    });
  });

  describe("padTime", () => {
    test("padTimeでtimeが0埋めされる", () => {
      const { setTime } = setup();

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      const { padTime } = setup();

      expect(padTime()).toEqual(
        `${time.hours.toString().padStart(2, "0")}${time.minutes
          .toString()
          .padStart(2, "0")}${time.seconds.toString().padStart(2, "0")}`
      );
    });
  });

  describe("changeTenTime", () => {
    test("引数にaddを渡すと10秒増える", () => {
      const { changeTenTime, setTime } = setup();

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        changeTenTime("add");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 1, seconds: 11 });
    });

    test("引数にminusを渡すと10秒減る", () => {
      const { changeTenTime, setTime } = setup();

      act(() => {
        setTime({ hours: 1, minutes: 1, seconds: 1 });
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        changeTenTime("minus");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 0, seconds: 51 });
    });

    test("modeがdownの時、引数にaddを渡すと10秒減る", () => {
      const { changeTenTime, setTime, changeMode, setDownInitialTime } =
        setup();

      act(() => {
        setDownInitialTime({ hours: 1, minutes: 1, seconds: 1 });
        setTime({ hours: 1, minutes: 1, seconds: 1 });
        changeMode();
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        changeTenTime("add");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 0, seconds: 51 });
    });

    test("modeがdownの時、引数にminusを渡すと10秒増える", () => {
      const { changeTenTime, setTime, changeMode, setDownInitialTime } =
        setup();

      act(() => {
        setDownInitialTime({ hours: 1, minutes: 2, seconds: 0 });
        setTime({ hours: 1, minutes: 1, seconds: 1 });
        changeMode();
      });

      const { time } = setup(10000);

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 50 });

      act(() => {
        changeTenTime("minus");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 2, seconds: 0 });
    });

    test("modeがdownの時、引数にminusを渡すとdownInitialTimeを超えたらdownInitialTimeになる", () => {
      const { changeTenTime, setTime, changeMode, setDownInitialTime } =
        setup();

      act(() => {
        setDownInitialTime({ hours: 1, minutes: 1, seconds: 1 });
        setTime({ hours: 1, minutes: 1, seconds: 1 });
        changeMode();
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 1, minutes: 1, seconds: 1 });

      act(() => {
        changeTenTime("minus");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 1, minutes: 1, seconds: 1 });
    });

    test("modeがupのときにaddを渡してもtimeが4時間を超えたら4時間になる", () => {
      const { changeTenTime, setTime } = setup();

      act(() => {
        setTime({ hours: 3, minutes: 59, seconds: 50 });
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 3, minutes: 59, seconds: 50 });

      act(() => {
        changeTenTime("add");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 4, minutes: 0, seconds: 0 });
    });

    test("modeがupのときにminusを渡してもtimeが0秒を下回ったら0になる", () => {
      const { changeTenTime, setTime } = setup();

      act(() => {
        setTime({ hours: 0, minutes: 0, seconds: 9 });
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 9 });

      act(() => {
        changeTenTime("minus");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    test("modeがdownのときにaddを渡してもtimeが0秒を下回ったら0になる", () => {
      const { changeTenTime, setTime, changeMode, setDownInitialTime } =
        setup();

      act(() => {
        setDownInitialTime({ hours: 0, minutes: 0, seconds: 9 });
        setTime({ hours: 0, minutes: 0, seconds: 9 });
        changeMode();
      });

      const { time } = setup();

      expect(time).toEqual({ hours: 0, minutes: 0, seconds: 9 });

      act(() => {
        changeTenTime("add");
      });

      const { time: t } = setup();

      expect(t).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });
  });
});

describe("useTimerState state", () => {
  test("startを呼ぶとintervalが動き出す", () => {
    const { interval } = setup();

    expect(interval.active).toBeFalsy();

    act(() => {
      interval.start();
    });

    const { interval: i } = setup();

    expect(i.active).toBeTruthy();
  });

  test("stopを呼ぶとintervalが止まる", () => {
    const { interval } = setup();

    expect(interval.active).toBeFalsy();

    act(() => {
      interval.start();
    });

    const { interval: i } = setup();

    expect(i.active).toBeTruthy();

    act(() => {
      interval.stop();
    });

    const { interval: i2 } = setup();

    expect(i2.active).toBeFalsy();
  });

  test("toggleを呼ぶとintervalが動いていれば止まり、止まっていれば動き出す", () => {
    const { interval } = setup();

    expect(interval.active).toBeFalsy();

    act(() => {
      interval.toggle();
    });

    const { interval: i } = setup();

    expect(i.active).toBeTruthy();

    act(() => {
      interval.toggle();
    });

    const { interval: i2 } = setup();

    expect(i2.active).toBeFalsy();
  });

  test("resetを呼ぶとintervalが止まる", () => {
    const { interval } = setup();

    expect(interval.active).toBeFalsy();

    act(() => {
      interval.start();
    });

    const { interval: i } = setup();

    expect(i.active).toBeTruthy();

    act(() => {
      interval.reset();
    });

    const { interval: i2 } = setup();

    expect(i2.active).toBeFalsy();
  });

  test("downでresetを呼ぶとmodeがupになる", () => {
    const { interval, changeMode, setDownInitialTime } = setup();

    expect(interval.active).toBeFalsy();

    act(() => {
      interval.start();
    });

    const { interval: i } = setup();

    expect(i.active).toBeTruthy();

    act(() => {
      setDownInitialTime({ hours: 1, minutes: 1, seconds: 1 });
      changeMode();
    });

    const { mode } = setup();

    expect(mode).toEqual("down");

    act(() => {
      interval.reset();
    });

    const { interval: i3, mode: m } = setup();

    expect(i3.active).toBeFalsy();
    expect(m).toEqual("up");
  });
});
