export const changeTimeToJa = (inputTime: string) => {
  const UTCTime = new Date(inputTime);
  const japanTime = UTCTime.toLocaleString("ja-JP", {
    timeZone: "Europe/London",
  });
  const time = new Date(japanTime);

  return time;
};
