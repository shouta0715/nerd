import clsx from "clsx";
import React from "react";
import {
  ListBox,
  ListBoxOption,
} from "src/components/Elements/Listbox/Listbox";
import { Pagination } from "src/components/Elements/Pagination";
import { HistoryList } from "src/features/request/history/components/HistoryList";
import { useRequestHistory } from "src/features/request/history/hooks/useRequestHistory";
import {
  getStatusListLabel,
  getStatusQuery,
  parseStatus,
} from "src/features/request/history/utils";
import { Status_Enum } from "src/gql/graphql";

const options: ListBoxOption[] = [
  { id: "all", name: getStatusListLabel("all") },
  { id: Status_Enum.Pending, name: getStatusListLabel(Status_Enum.Pending) },
  { id: Status_Enum.Approved, name: getStatusListLabel(Status_Enum.Approved) },
  { id: Status_Enum.Rejected, name: getStatusListLabel(Status_Enum.Rejected) },
];

export const RequestHistory = () => {
  const { data, push, query, isFetching } = useRequestHistory();

  const hasData =
    data?.request_works_aggregate.aggregate &&
    data?.request_works_aggregate.aggregate?.count > 0;

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="flex items-center justify-between gap-x-2  font-semibold">
          リクエスト履歴
          <span>
            {hasData && !isFetching ? (
              <span className="text-sm text-gray-500">
                {data?.request_works_aggregate.aggregate?.count ?? 0}件
              </span>
            ) : isFetching ? (
              <span className="text-sm text-gray-500">読み込み中...</span>
            ) : null}
          </span>
        </h3>
        <ListBox<Status_Enum | "all", ListBoxOption>
          buttonLabel={(value) => {
            return getStatusListLabel(value);
          }}
          isLoading={isFetching}
          onChange={(value) => {
            push({
              query: {
                ...query,
                status: getStatusQuery(value),
              },
            });
          }}
          options={options}
          value={parseStatus(query.status) || "all"}
        />
      </div>
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
