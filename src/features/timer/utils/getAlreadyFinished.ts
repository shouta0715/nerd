export const getIsAlreadyFinished = (end_time: string) => {
  const now = new Date();
  const end = new Date(end_time);

  return now.getTime() > end.getTime();
};
