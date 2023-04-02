export const getIsFinished = (end_time: string) => {
  const now = new Date();
  const endTime = new Date(end_time);

  return now.getTime() > endTime.getTime();
};
