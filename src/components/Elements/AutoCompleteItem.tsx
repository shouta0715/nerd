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
    <div ref={ref} className="cursor-pointer p-2 hover:bg-slate-100">
      <Text className="mb-1 text-sm md:text-base">{title}</Text>
      {episodeTitle && (
        <div className="flex items-center">
          <Text size="xs" className="mr-1" color="dimmed">
            {number}.
          </Text>
          <Text size="xs" color="dimmed">
            {episodeTitle}
          </Text>
        </div>
      )}
    </div>
  )
);
