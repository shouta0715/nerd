import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";
import { useTimerState } from "src/features/timer/store";

type Props = {
  title?: string;
  sub_title?: string;
  number?: number;
  id?: string | number;
};

export const Header: FC<Props> = ({ title, sub_title, number, id }) => {
  const mode = useTimerState((state) => state.mode);

  return (
    <header className="flex flex-col px-4 lg:px-0">
      <div
        className={`flex w-full flex-1 flex-col items-center gap-1 lg:rounded-t-2xl lg:px-4 lg:py-6 lg:text-white
      ${mode === "up" ? "lg:bg-orange-500" : "lg:bg-indigo-600"}`}
      >
        <Text
          className="line-clamp-2 text-base font-bold  md:text-lg "
          component="h4"
        >
          {title}
        </Text>
        {sub_title && (
          <Text className="flex" component="div">
            <Text className="mr-2 text-sm md:text-base" component="p">
              第{number}話
            </Text>
            <Text
              className="line-clamp-3 flex-1 text-sm md:text-base"
              component="p"
            >
              {sub_title}
            </Text>
          </Text>
        )}
      </div>
      <div className="mx-auto mt-1.5 flex max-w-max flex-col md:mt-3">
        <Text
          className={`mx-auto mb-1.5 px-10 text-sm font-bold text-indigo-500 transition-colors duration-300 md:text-base ${
            mode === "up" ? "text-orange-500" : "text-indigo-500"
          }`}
        >
          {mode === "up" ? "開始から" : "終了まで"}
        </Text>
        <CountUpTimer id={id} />
      </div>
    </header>
  );
};
