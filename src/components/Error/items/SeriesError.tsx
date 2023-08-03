import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Text } from "src/components/Elements/Text";

export const SeriesError = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-6">
      <ExclamationTriangleIcon
        aria-label="エラー"
        className="h-32 w-32 stroke-current text-red-500"
      />
      <Text
        className=" text-lg font-semibold text-gray-500"
        component="p"
        size="md"
      >
        現在、エピソードを更新しています。再度時間をおいてアクセスしてください。
      </Text>
    </div>
  );
};
