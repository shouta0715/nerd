import { SelectItemProps, Text } from "@mantine/core";
import { forwardRef } from "react";

interface ItemProps extends SelectItemProps {
  title: string;
  episodeTitle: string;
  number: number;
}
export const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ title, number, episodeTitle, ...others }: ItemProps, ref) => (
    <div
      ref={ref}
      {...others}
      className="cursor-pointer p-2 hover:bg-slate-100"
    >
      <Text className="mb-1 text-sm md:text-base">{title}</Text>
      <div className="flex items-center">
        <Text size="xs" className="mr-1" color="dimmed">
          {number}.
        </Text>
        <Text size="xs" color="dimmed">
          {episodeTitle}
        </Text>
      </div>
    </div>
  )
);
