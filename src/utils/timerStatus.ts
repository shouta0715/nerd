export const genTimerStatus = (start_time: string, end_time: string) => {
  const now = new Date();
  const startTime = new Date(start_time);
  const endTime = new Date(end_time);

  if (now.getTime() < startTime.getTime()) {
    return {
      timer: true,
      status: "開始まで",
    };
  }
  if (now.getTime() > endTime.getTime()) {
    return {
      timer: false,
      status: "終了",
    };
  }

  return {
    timer: true,
    status: "終了まで",
  };
};
