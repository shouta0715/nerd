import React, { FC } from "react";
import { Notification } from "src/components/Notification";

type Props = {
  children: React.ReactNode;
};

export const NotificationProvider: FC<Props> = ({ children }) => (
  <>
    {children}
    <Notification />
  </>
);
