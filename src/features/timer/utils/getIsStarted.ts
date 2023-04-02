export const getIsStarted = (start_time: string) => {
  const now = new Date();
  const start = new Date(start_time);

  return now.getTime() > start.getTime();
};
