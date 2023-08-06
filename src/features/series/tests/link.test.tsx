import { getSeriesLink, getSeriesQuery } from "src/features/series/utils/link";

describe("series/utils/link", () => {
  describe("getSeriesLink", () => {
    it("should return /series/[series_id]", () => {
      expect(getSeriesLink({ series_id: "1" })).toEqual("/series/1");
    });
  });

  describe("getSeriesQuery", () => {
    it("should return { title: title }", () => {
      expect(getSeriesQuery({ title: "title" })).toEqual({
        series_title: "title",
      });
    });
  });
});
