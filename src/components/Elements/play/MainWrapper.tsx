import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const MainWrapper: FC<Props> = ({ children }) => (
  <main className="flex flex-1 flex-col bg-gray-50 lg:min-h-screen lg:w-1/2 lg:flex-none">
    <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
      {children}
    </div>
  </main>
);
