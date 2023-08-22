import { useRouter } from "next/router";
import React, { FC } from "react";
import {
  ListBox,
  ListBoxOption,
} from "src/components/Elements/Listbox/Listbox";
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

type Props = {
  count?: number;
  isFetching: boolean;
  hasData: boolean;
};

export const RequestHeader: FC<Props> = ({
  count = 0,
  isFetching,
  hasData,
}) => {
  const { push, query } = useRouter();

  return (
    <div className="flex justify-between">
      <h3 className="flex items-center justify-between gap-x-2  font-semibold">
        リクエスト履歴
        <span>
          {hasData && !isFetching ? (
            <span className="text-sm text-gray-500">{count ?? 0}件</span>
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
  );
};
