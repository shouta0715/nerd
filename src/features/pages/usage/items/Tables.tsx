import React, { FC } from "react";

type TableContent = {
  content: string;
};

type TableHeaders = {
  title: string;
};

type Props = {
  title: string;
  tableContents: TableContent[];
  tableHeaders: TableHeaders[];
};

export const Tables: FC<Props> = ({ tableContents, tableHeaders, title }) => {
  return (
    <div>
      <h3 className="text-center font-bold leading-10 tracking-tight text-gray-900">
        {title}
      </h3>
      <div className="flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="w-full table-fixed divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr className="divide-x divide-gray-200">
                  {tableHeaders.map((tableHeader) => (
                    <th
                      key={tableHeader.title}
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      scope="col"
                    >
                      {tableHeader.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="divide-x divide-gray-200">
                  {tableContents.map((tableContent) => (
                    <td
                      key={tableContent.content}
                      className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <p className="text-gray-500">{tableContent.content}</p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
