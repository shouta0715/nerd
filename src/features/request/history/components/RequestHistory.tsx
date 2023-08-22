import clsx from "clsx";
import React from "react";

import { Pagination } from "src/components/Elements/Pagination";
import { RequestHeader } from "src/features/request/common/components/Header";
import { HistoryList } from "src/features/request/history/components/HistoryList";
import { useRequestHistory } from "src/features/request/history/hooks/useRequestHistory";

export const RequestHistory = () => {
  const { data, isFetching } = useRequestHistory();

  const hasData =
    data?.request_works_aggregate.aggregate &&
    data?.request_works_aggregate.aggregate?.count > 0;

  return (
    <div>
      <RequestHeader
        count={data?.request_works_aggregate.aggregate?.count}
        hasData={Boolean(hasData)}
        isFetching={isFetching}
      />
      {hasData ? (
        <div className="flex flex-col gap-y-12">
          <div className="mt-4">
            <ul
              className={clsx(
                "grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8",
                isFetching ? "animate-pulse opacity-90" : ""
              )}
            >
              {data?.request_works.map((request) => (
                <HistoryList key={request.id} request={request} />
              ))}
            </ul>
          </div>
          <Pagination
            baseUrl="/request"
            total={data?.request_works_aggregate.aggregate?.count ?? 0}
          />
        </div>
      ) : (
        <p className="mt-20 flex items-center justify-center break-words  text-dimmed">
          リクエスト履歴はみつかりませんでした。
        </p>
      )}
    </div>
  );
};
