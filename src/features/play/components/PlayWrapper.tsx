import React, { FC } from "react";
import { Modal } from "src/components/Elements/Modal";
import { Header } from "src/components/Layout/Header";

type Props = {
  children: React.ReactNode;
};

export const PlayWrapper: FC<Props> = ({ children }) => (
  <>
    <div className="flex min-h-screen animate-fadeUp flex-col ">
      <Header size="sm" />
      <div className="container relative contents flex-1 lg:mx-auto lg:flex">
        {children}
      </div>
    </div>
    <Modal />
  </>
);
