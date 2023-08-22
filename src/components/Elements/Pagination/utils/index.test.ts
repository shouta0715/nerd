import { generatePagination } from "src/components/Elements/Pagination/utils";

const setup = (page: number, max: number) => {
  return generatePagination(page, max);
};

describe("generatePagination", () => {
  test("PAGINATION_SIZE(5)よりmaxが小さい場合maxの長さの配列が返される", () => {
    const page = 1;
    const max = 4;
    const result = setup(page, max);
    expect(result).toHaveLength(max);
  });

  test("pageが1の場合1からPAGINATION_SIZE(5)までの配列が返される", () => {
    const page = 1;
    const max = 10;
    const result = setup(page, max);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("pageがmaxの場合maxからPAGINATION_SIZE(5)までの配列が返される", () => {
    const page = 10;
    const max = 10;
    const result = setup(page, max);
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });

  test("pageが4の場合2から6までの配列が返される", () => {
    const page = 4;
    const max = 10;
    const result = setup(page, max);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });
});
