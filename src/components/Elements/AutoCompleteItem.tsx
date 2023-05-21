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
      <Text className="mb-1 text-sm font-medium md:text-base">{title}</Text>
      {episodeTitle && (
        <div className="flex ">
          <Text className="mr-1 text-dimmed" size="xs">
            {number}.
          </Text>
          <Text className="text-dimmed" size="xs">
            {episodeTitle}
          </Text>
        </div>
      )}
    </div>
  )
);
