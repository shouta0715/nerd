import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorMessage } from "src/components/Error/items/ErrorMessage";

import { RequestForm } from "src/components/Form/Request";
import { RequestHeader } from "src/features/request/common/components/Header";
import { RequestLoading } from "src/features/request/common/components/Loading";
import { useUserState } from "src/store/user/userState";

const DynamicRequestHistory = dynamic(
  () =>
    import("src/features/request/history/components/RequestHistory").then(
      (mod) => mod.RequestHistory
    ),
  {
    loading: () => <RequestLoading />,
  }
);

export const Request = () => {
  const user = useUserState((state) => state.user);

  return (
    <div className="flex animate-fadeUp flex-col gap-y-8 pb-8">
      <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
        作品のリクエスト
      </h2>
      <div className="grid gap-y-8">
        <section className="grid gap-y-4">
          <h3 className="flex items-center justify-between gap-x-2 font-semibold">
            リクエストフォーム
          </h3>
          <RequestForm />
        </section>

        <section className="grid gap-y-4">
          {user ? (
            <ErrorBoundary
              // eslint-disable-next-line react/no-unstable-nested-components
              FallbackComponent={(fallback) => {
                return (
                  <>
                    <RequestHeader hasData={false} isFetching={false} />
                    <ErrorMessage {...fallback} />
                  </>
                );
              }}
            >
              <Suspense fallback={<RequestLoading />}>
                <DynamicRequestHistory />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <RequestLoading />
          )}
        </section>
      </div>
    </div>
  );
};
