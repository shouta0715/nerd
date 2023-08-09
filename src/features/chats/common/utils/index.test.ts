import {
  isAvoidFetchNext,
  multipleOf300,
} from "src/features/chats/common/utils";

describe("chat/utils", () => {
  describe("multipleOf300", () => {
    test("300の倍数の時は+300した値を返す", () => {
      expect(multipleOf300(0)).toBe(300);
      expect(multipleOf300(300)).toBe(600);
      expect(multipleOf300(600)).toBe(900);
    });

    test("300の倍数でない時かつ切り上げた値より120以上小さい場合は、300の倍数になるように切り上げた値を返す", () => {
      expect(multipleOf300(1)).toBe(300);
      expect(multipleOf300(299)).not.toBe(300);
      expect(multipleOf300(299)).toBe(600);
      expect(multipleOf300(301)).toBe(600);
      expect(multipleOf300(599)).not.toBe(600);
    });

    test("消す値が入力値の120以下の場合", () => {
      expect(multipleOf300(120)).toBe(300);
      expect(multipleOf300(121)).toBe(300);
      expect(multipleOf300(299)).toBe(600);
      expect(multipleOf300(301)).toBe(600);
    });

    test("14400を超えた場合は14400を返す", () => {
      expect(multipleOf300(14400)).toBe(14400);
    });
  });

  describe("isAvoidFetchNext", () => {
    test("pageParamsの_gteがtimeより大きい場合はtrueを返す", () => {
      expect(
        isAvoidFetchNext(0, {
          _gte: 1,
          _lt: 300,
        })
      ).toBe(true);

      expect(
        isAvoidFetchNext(600, {
          _gte: 900,
          _lt: 1200,
        })
      ).toBe(true);
    });

    test("pageParamsの間にtimeがいる場合はtrue", () => {
      expect(
        isAvoidFetchNext(600, {
          _gte: 300,
          _lt: 900,
        })
      ).toBe(true);
    });

    test("30秒前になったらfalse", () => {
      expect(
        isAvoidFetchNext(570, {
          _gte: 300,
          _lt: 600,
        })
      ).toBe(false);
    });

    test("pageParamsの_ltがtimeより小さい場合はfalseを返す", () => {
      expect(
        isAvoidFetchNext(900, {
          _gte: 300,
          _lt: 600,
        })
      ).toBe(false);
    });

    test("_ltとの差が30秒より小さくなったらfalse", () => {
      expect(
        isAvoidFetchNext(570, {
          _gte: 300,
          _lt: 600,
        })
      ).toBe(false);

      expect(
        isAvoidFetchNext(271, {
          _gte: 1,
          _lt: 300,
        })
      ).toBe(false);
    });

    test("_ltとの差が30秒より大きい場合はtrue", () => {
      expect(
        isAvoidFetchNext(569, {
          _gte: 300,
          _lt: 600,
        })
      ).toBe(true);
    });
  });
});
