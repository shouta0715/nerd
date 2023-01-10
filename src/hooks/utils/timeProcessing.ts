export const timeProcessing = () => {
  const secondToTime = (second: number) => {
    const hours = Math.floor(second / 3600);
    const minutes = Math.floor((second - hours * 3600) / 60);
    const seconds = second - hours * 3600 - minutes * 60;

    return { hours, minutes, seconds };
  };

  const timeToSecond = ({
    hours,
    minutes,
    seconds,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => hours * 3600 + minutes * 60 + seconds;

  return { secondToTime, timeToSecond };
};
