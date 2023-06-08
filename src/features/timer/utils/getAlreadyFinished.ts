export const getIsAlreadyFinished = (end_time: string) => {
  if (!end_time) return false;
  const now = new Date();
  const end = new Date(end_time);

  return now.getTime() > end.getTime();
};
