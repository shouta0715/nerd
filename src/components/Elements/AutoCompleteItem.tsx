/* eslint-disable react/require-default-props */

import { forwardRef } from "react";
import { Text } from "src/components/Elements/Text";

interface ItemProps {
  title: string;
  episodeTitle?: string;
  number?: number;
}
export const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ title, number, episodeTitle }, ref) => (
    <div ref={ref} className="cursor-pointer rounded p-2 hover:bg-slate-100">
      <Text className="mb-1 text-sm font-bold md:text-base" ff="Hiragino Sans">
        {title}
      </Text>
      {episodeTitle && (
        <div className="flex ">
          <Text className="mr-1 text-dimmed" ff="Hiragino Sans" size="xs">
            {number}.
          </Text>
          <Text className="text-dimmed" ff="Hiragino Sans" size="xs">
            {episodeTitle}
          </Text>
        </div>
      )}
    </div>
  )
);
