import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorMessage } from "src/components/Error/items/ErrorMessage";
import { RequestForm } from "src/components/Form/Request";
import { RequestHistory } from "src/features/request/history/components/RequestHistory";
import { useUserState } from "src/store/user/userState";

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
          {user && (
            <ErrorBoundary FallbackComponent={ErrorMessage}>
              <Suspense fallback={<div>Loading...</div>}>
                <RequestHistory />
              </Suspense>
            </ErrorBoundary>
          )}
        </section>
      </div>
    </div>
  );
};
