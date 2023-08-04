export const getInitialPageParam = () => {
  return {
    cursor: new Date().toISOString(),
    likes_cursor: 100000,
  };
};
