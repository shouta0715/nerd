import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import Link from "next/link";
import {
  getSlugWorkLink,
  getSlugWorkQuery,
  getWorksLink,
  getWorksQuery,
} from "src/features/works/utils/link";

const user = userEvent.setup();

const noSeriesAsPath = "/works/1";
const SeriesAsPath = "/works/1?series=1";
const Href = "/works/1";
const Query = {
  series: "1",
  work: ["title", "series_title"],
};
const SlugAsPath = "/works/play/1?mode=comment&order=new";
const SlugHref = "/works/play/1";
const SlugQuery = {
  mode: "comment",
  order: "new",
  work: ["title", "series_title", ""],
};

const createMockQuery = () => {
  const series_id = "1";
  const title = "title";
  const series_title = "series_title";

  return {
    series_id,
    title,
    series_title,
  };
};

const createMockLink = () => {
  const id = 1;
  const series_id = "1";

  return {
    id,
    series_id,
  };
};

describe("works/utils/link", () => {
  test("asがtrueでseries_idがない場合/works/${id}がhrefになる", async () => {
    const { id } = createMockLink();
    mockRouter.setCurrentUrl("/");
    const as = getWorksLink({
      as: true,
      id,
    });

    expect(as).toBe(noSeriesAsPath);

    render(
      <Link
        as={as}
        href={{
          pathname: Href,
          query: { id },
        }}
      />,
      {
        wrapper: MemoryRouterProvider,
      }
    );
    const router = screen.getByRole("link");
    await act(async () => {
      await user.click(router);
    });
    expect(mockRouter.asPath).toBe(noSeriesAsPath);
  });

  test("asがtrueでseries_idがある場合/works/${id}?series_id=${series_id}がhrefになる", async () => {
    const { id, series_id } = createMockLink();
    mockRouter.setCurrentUrl("/");
    const as = getWorksLink({
      as: true,
      id,
      series_id,
    });

    expect(as).toBe(SeriesAsPath);

    render(
      <Link
        as={as}
        href={{
          pathname: Href,
          query: { id, series_id },
        }}
      />,
      {
        wrapper: MemoryRouterProvider,
      }
    );
    const router = screen.getByRole("link");
    await act(async () => {
      await user.click(router);
    });
    expect(mockRouter.asPath).toBe(SeriesAsPath);
  });

  test("asがfalseの場合Hrefがhrefになる", async () => {
    const { id, series_id } = createMockLink();
    mockRouter.setCurrentUrl("/");
    const as = getWorksLink({
      as: false,
      id,
      series_id,
    });

    expect(as).toBe(Href);

    render(
      <Link
        as={as}
        href={{
          pathname: Href,
          query: { id, series_id },
        }}
      />,
      {
        wrapper: MemoryRouterProvider,
      }
    );
    const router = screen.getByRole("link");
    await act(async () => {
      await user.click(router);
    });
    expect(mockRouter.asPath).toBe(Href);
  });
});

describe("works/utils/query", () => {
  test("series_idがある場合workはstring[]でseries_idはstring", async () => {
    const { series_id, title, series_title } = createMockQuery();

    const query = getWorksQuery({
      series_title,
      title,
      series_id,
    });

    expect(query).toEqual(Query);
  });

  test("series_idがない場合workはstring[]でseries_idはundefined", async () => {
    const { title, series_title } = createMockQuery();

    const query = getWorksQuery({
      series_title,
      title,
    });

    expect(query).toEqual({
      series: undefined,
      work: [title, series_title],
    });
  });
});

describe("works/utils/slug", () => {
  test("asがtrueならmode=commentとorder=newがつく", async () => {
    const { id } = createMockLink();
    const as = getSlugWorkLink({
      as: true,
      id,
    });

    expect(as).toBe(SlugAsPath);
  });

  test("asがfalseならmode=commentとorder=newがつかない", async () => {
    const { id } = createMockLink();
    const as = getSlugWorkLink({
      as: false,
      id,
    });

    expect(as).toBe(SlugHref);
  });

  test("queryにseries_idがない場合はwork[2]は空文字", async () => {
    const { title, series_title } = createMockQuery();
    const query = getSlugWorkQuery({
      title,
      series_title,
    });

    expect(query).toEqual(SlugQuery);
  });

  test("queryにseries_idがある場合はwork[2]はseries_id", async () => {
    const { title, series_title, series_id } = createMockQuery();
    const query = getSlugWorkQuery({
      title,
      series_title,
      series_id,
    });

    expect(query).toEqual({
      ...SlugQuery,
      work: [title, series_title, series_id],
    });
  });
});
