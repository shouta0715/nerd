import { InfiniteData } from "@tanstack/react-query";
import { PageParams } from "src/features/chats/common/types";
import { fetchInfiniteNextPage } from "src/features/chats/common/utils/infinite";

const createPageParams = (length = 1): PageParams[] => {
  // _lt = length * 300 , _gte = length * 300 - 300
  return Array.from({ length }).map((_, i) => ({
    _gte: 300 * i ? 300 * i : 1,
    _lt: 300 * (i + 1),
  }));
};

const setup = ({
  pageParams,
  isFetchingNextPage = false,
  time,
}: {
  pageParams: InfiniteData<unknown>["pageParams"];
  isFetchingNextPage?: boolean;
  time: number;
}) => {
  const fetchNextPage = jest.fn();

  fetchInfiniteNextPage({
    pageParams,
    isFetchingNextPage,
    fetchNextPage,
    time,
  });

  return {
    fetchNextPage,
  };
};

describe("fetchInfiniteNextPage", () => {
  it("timeが270より小さいい場合はfetchNextPageは呼ばれない", () => {
    const { fetchNextPage } = setup({
      pageParams: [],
      time: 269,
    });

    expect(fetchNextPage).not.toBeCalled();
  });

  test("pageParamsが適切な形でなければfetchNextPageは呼ばれない。", () => {
    const { fetchNextPage } = setup({
      pageParams: [],
      time: 270,
    });

    expect(fetchNextPage).not.toBeCalled();
  });

  test("pageParamsが適切な形であればfetchNextPageは呼ばれる。", () => {
    const { fetchNextPage } = setup({
      pageParams: createPageParams(),
      time: 270,
    });

    expect(fetchNextPage).toBeCalled();
  });

  test("isFetchingNextPageがtrueであればfetchNextPageは呼ばれない。", () => {
    const { fetchNextPage } = setup({
      pageParams: createPageParams(),
      isFetchingNextPage: true,
      time: 270,
    });

    expect(fetchNextPage).not.toBeCalled();
  });

  test("timeがpageParamsの最後の_gteより小さければfetchNextPageは呼ばれない。", () => {
    // 今回は_gte = 300 , _lt = 600
    const { fetchNextPage } = setup({
      pageParams: createPageParams(2),
      time: 299,
    });

    expect(fetchNextPage).not.toBeCalled();
  });

  test("timeがpageParamsの_lt - 30より小さかったら呼ばれない。", () => {
    const { fetchNextPage } = setup({
      pageParams: createPageParams(),
      time: 269,
    });

    expect(fetchNextPage).not.toBeCalled();
  });

  test("timeがpageParamsの最後の_lt - 30と_gteの間にいたら呼ばれない", () => {
    // 今回は_lt = 600, _gte = 300
    const { fetchNextPage } = setup({
      pageParams: createPageParams(2),
      time: 450,
    });

    expect(fetchNextPage).not.toBeCalled();

    const { fetchNextPage: fetchNextPage2 } = setup({
      pageParams: createPageParams(2),
      time: 569,
    });

    expect(fetchNextPage2).not.toBeCalled();
  });

  test("pageParams.lengthが47より大きかったらだったらfetchNextPageは呼ばれない。", () => {
    const { fetchNextPage } = setup({
      pageParams: createPageParams(48),
      time: 14401,
    });

    expect(fetchNextPage).not.toBeCalled();
  });

  test("pageParams.lengthが47以下だったらfetchNextPageは呼ばれる。", () => {
    const { fetchNextPage } = setup({
      pageParams: createPageParams(47),
      time: 14401,
    });

    expect(fetchNextPage).toBeCalled();
  });

  test("timeがpageParamsの最後の_lt - 30以上、pageParams.lengthが47以下だったらfetchNextPageは呼ばれる。", () => {
    // 今回の最後の_lt = 14100, _gte = 13800
    const { fetchNextPage } = setup({
      pageParams: createPageParams(47),
      // _lt - 30 = 14070
      time: 14070,
    });

    expect(fetchNextPage).toBeCalled();

    const { fetchNextPage: fetchNextPage2 } = setup({
      pageParams: createPageParams(47),
      // _lt - 30 = 14070より小さいと呼ばれない
      time: 14069,
    });

    expect(fetchNextPage2).not.toBeCalled();
  });
});
