import { useCallback } from "react";

type Args = {
  start_time: string;
  end_time: string;
};

type GetIsArchiveArgs = {
  end_time: string;
  slug: string | string[] | undefined;
};

export const useTimerStatus = () => {
  const getTimeStatus = ({ start_time, end_time }: Args) => {
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

  const getIsFinished = useCallback(
    ({ end_time }: Omit<Args, "start_time">) => {
      const now = new Date();
      const endTime = new Date(end_time);

      return now.getTime() > endTime.getTime();
    },
    []
  );

  const getIsArchive = useCallback(
    ({ end_time, slug }: GetIsArchiveArgs) => {
      const isFInished = getIsFinished({ end_time });
      const isArchive = slug === "archive";

      return isFInished || isArchive;
    },
    [getIsFinished]
  );

  return {
    getTimeStatus,
    getIsFinished,
    getIsArchive,
  };
};
