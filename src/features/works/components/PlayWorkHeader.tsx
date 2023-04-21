import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";

type Props = {
  title?: string;
  id?: number;
};

export const PlayWorkHeader: FC<Props> = ({ title, id }) => (
  <header className="container mx-auto mb-2 flex flex-col bg-white p-6 pb-0">
    <div className="flex w-full flex-1 flex-col items-center gap-2">
      <Text
        className="line-clamp-3 text-base font-bold md:text-lg"
        component="h4"
        ff="Hiragino Sans"
      >
        {title}
      </Text>
    </div>
    <div className="mx-auto mt-3 flex max-w-max flex-col">
      <Text className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold text-indigo-500 md:text-base">
        開始から
      </Text>
      <CountUpTimer id={id} />
    </div>
  </header>
);
