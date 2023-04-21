import React, { FC } from "react";
import { Modal } from "src/components/Elements/Modal";

type Props = {
  children: React.ReactNode;
};

export const PlayWrapper: FC<Props> = ({ children }) => (
  <>
    <div className="flex min-h-screen animate-fadeUp flex-col ">
      <div className="container contents lg:mx-auto lg:flex">{children}</div>
    </div>
    <Modal />
  </>
);
