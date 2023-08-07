import React, { FC } from "react";
import { TimerSkeleton } from "src/components/Elements/Skeleton/items/TimerSkeleton";
import { Text } from "src/components/Elements/Text";

type Props = {
  title?: string;
  sub_title?: string;
  number?: number;
};

export const HeaderSkeleton: FC<Props> = ({ title, number, sub_title }) => {
  return (
    <header className="flex flex-col px-4 lg:px-0">
      <div className="flex w-full flex-1 flex-col items-center gap-y-1 lg:animate-gradient lg:rounded-t-2xl lg:bg-gradient-to-r lg:from-indigo-400  lg:to-orange-400 lg:bg-[length:400%] lg:px-4 lg:py-6 lg:text-white">
        <Text
          className="line-clamp-1 text-sm font-bold md:line-clamp-2 md:text-lg "
          component="h4"
        >
          {title}
        </Text>
        {sub_title && (
          <Text className="flex" component="div">
            <Text className="mr-2 text-xs md:text-base" component="p">
              第{number}話
            </Text>
            <Text
              className="line-clamp-1 flex-1 text-xs md:line-clamp-2 md:text-base"
              component="p"
            >
              {sub_title}
            </Text>
          </Text>
        )}
      </div>
      <div className="mx-auto mt-1.5 flex max-w-max flex-col md:mt-3">
        <Text className="mx-auto mb-1.5 px-10 text-sm font-bold  md:text-base">
          ロード中
        </Text>
        <TimerSkeleton />
      </div>
    </header>
  );
};
