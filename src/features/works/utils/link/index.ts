import {
  GetSlugWorkLink,
  GetWorksLink,
  GetWorksQuery,
} from "src/features/works/types";

export const getWorksLink = ({ as, series_id, id }: GetWorksLink) => {
  if (as) {
    return series_id ? `/works/${id}?series=${series_id}` : `/works/${id}`;
  }

  return `${`/works/${id}`}`;
};

export const getWorksQuery = ({
  series_id,
  series_title,
  title,
}: GetWorksQuery) => {
  return {
    series: series_id ?? undefined,
    work: [title, series_title],
  };
};

export const getSlugWorkLink = ({ id, as }: GetSlugWorkLink) => {
  return as ? `/works/play/${id}?mode=comment&order=new` : `/works/play/${id}`;
};

export const getSlugWorkQuery = ({
  series_id,
  series_title,
  title,
}: GetWorksQuery) => {
  return {
    order: "new",
    mode: "comment",
    work: [title, series_title, series_id ?? ""],
  };
};
