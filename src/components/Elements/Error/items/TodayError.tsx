import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Text } from "src/components/Elements/Text";

export const TodayError = () => (
  <>
    <h2 className="mb-8">
      <Text className="text-lg font-bold md:text-xl" component="span">
        今日放送のエピソード
      </Text>
    </h2>
    <div className="flex flex-col items-center justify-center">
      <ExclamationTriangleIcon
        aria-label="エラー"
        className="h-24 w-24 stroke-current text-red-500"
      />
      <Text className="mt-8 font-semibold" component="p" size="md">
        現在、今日のエピソードを更新しています。再度時間をおいてアクセスしてください。
      </Text>
    </div>
  </>
);
