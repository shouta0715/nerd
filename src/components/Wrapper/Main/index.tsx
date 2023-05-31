import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const MainWrapper: FC<Props> = ({ children }) => (
  <main className="flex flex-1 flex-col border-r bg-gray-50 lg:min-h-full lg:w-1/2 lg:flex-none lg:border-r-slate-200 lg:pb-20">
    <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
      {children}
    </div>
  </main>
);
