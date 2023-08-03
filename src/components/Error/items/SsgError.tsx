/* eslint-disable react/destructuring-assignment */
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const SsgError = (props?: { message?: string }) => (
  <div className="flex flex-1 flex-col items-center justify-center px-3 md:px-6">
    <ExclamationTriangleIcon className="mb-6 h-28 w-28 stroke-current text-red-500" />
    <h2 className="text-lg font-semibold">
      {props?.message ??
        "申し訳ありません。現在サーバエラーが発生しております。再度時間をおいてアクセスしてください."}
    </h2>
  </div>
);
