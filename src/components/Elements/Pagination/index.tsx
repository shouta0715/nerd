import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { generatePagination } from "src/components/Elements/Pagination/utils";

type Props = {
  baseUrl: string;
  total: number;
};

export const Pagination: FC<Props> = ({ baseUrl, total }) => {
  const { query, push } = useRouter();

  const currentPage = Number(query.page);

  const max = Math.ceil(total / 10);

  if (!currentPage) return null;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 py-3">
      <div className=" flex flex-1 flex-col items-center justify-between gap-2 lg:flex-row-reverse">
        <div>
          <nav
            aria-label="Pagination"
            className="isolate flex gap-x-1 rounded-md shadow-sm"
          >
            <button
              className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() =>
                push({
                  pathname: `${baseUrl}`,
                  query: {
                    ...query,
                    page: currentPage - 1,
                  },
                })
              }
            >
              <span className="sr-only">前に戻る</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {generatePagination(currentPage, max).map((page) => (
              <Link
                key={page}
                className={clsx(
                  "relative inline-flex items-center rounded-md px-4 py-2 text-sm ring-1 ring-inset ring-gray-300  focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-50"
                )}
                href={{
                  pathname: `${baseUrl}`,
                  query: {
                    ...query,
                    page,
                  },
                }}
              >
                {page}
              </Link>
            ))}

            <button
              className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentPage === max}
              onClick={() =>
                push({
                  pathname: `${baseUrl}`,
                  query: {
                    ...query,
                    page: currentPage + 1,
                  },
                })
              }
            >
              <span className="sr-only">次に進む</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
        {max > 1 && (
          <div className="flex text-sm text-gray-700">
            <p>
              計<span className="px-2 font-futura">1</span>〜
              <span className="px-2 font-futura">{max}</span>
              ページ
            </p>
            <p className="pl-2">
              <span className="px-2 font-futura">10</span>件ずつ表示中
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
