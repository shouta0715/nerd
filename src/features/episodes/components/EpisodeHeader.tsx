import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  title?: string;
  episode_title?: string;
  episode_number?: number;
  id?: string;
};

export const EpisodeHeader: FC<Props> = ({
  title,
  episode_number,
  episode_title,
  id,
}) => {
  const mode = useTimerState((state) => state.mode);

  return (
    <header className="container mx-auto mb-2 flex flex-col bg-white p-6 pb-0">
      <div className="flex w-full flex-1 flex-col items-center gap-2">
        <Text
          className=" text-base font-bold md:text-lg"
          component="h4"
          ff="Hiragino Sans"
        >
          {title}
        </Text>
        <Text className="flex" component="div">
          <Text
            className="mr-2 text-sm md:text-base"
            component="p"
            ff="Hiragino Sans"
          >
            第{episode_number}話
          </Text>
          <Text
            className="line-clamp-3 flex-1 text-sm md:text-base"
            component="p"
            ff="Hiragino Sans"
          >
            {episode_title}
          </Text>
        </Text>
      </div>
      <div className="mx-auto mt-3 flex max-w-max flex-col">
        <Text
          className={`m-0 mx-auto mb-1.5 px-10 text-sm font-bold text-indigo-500 transition-colors duration-300 md:text-base ${
            mode === "up" ? "text-pink-500" : "text-indigo-500"
          }`}
        >
          開始から
        </Text>
        <CountUpTimer id={id} />
      </div>
    </header>
  );
};
