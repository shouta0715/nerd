import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  isLiveComment?: boolean;
};

export const MainWrapper: FC<Props> = ({ children, isLiveComment = false }) => (
  <main
    className={`mb-20 flex flex-1 flex-col border-b border-r bg-gray-50 lg:mb-0 lg:min-h-screen lg:w-1/2 lg:flex-none lg:border-b-0 lg:border-b-slate-200 lg:border-r-slate-200 ${
      isLiveComment ? "mb-0" : ""
    }`}
  >
    <div className="container  mx-auto flex flex-1  lg:contents">
      {children}
    </div>
  </main>
);
