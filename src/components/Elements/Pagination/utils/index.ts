const PAGINATION_SIZE = 5;

export const generatePagination = (page: number, max: number) => {
  if (max <= PAGINATION_SIZE) {
    return Array.from({ length: max }, (_, i) => i + 1);
  }
  const startPage = page - Math.floor(PAGINATION_SIZE / 2);

  if (startPage < 1) {
    return Array.from({ length: PAGINATION_SIZE }, (_, i) => i + 1);
  }
  if (startPage + PAGINATION_SIZE > max) {
    return Array.from(
      { length: PAGINATION_SIZE },
      (_, i) => max - PAGINATION_SIZE + i + 1
    );
  }

  return Array.from({ length: PAGINATION_SIZE }, (_, i) => startPage + i);
};
