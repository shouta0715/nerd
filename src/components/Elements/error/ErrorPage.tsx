import React from "react";
import { FallbackProps } from "react-error-boundary";
import { NotFoundPage } from "src/components/Elements/error/404";
import { SeverErrorPage } from "src/components/Elements/error/500";

export const ErrorPage = ({ error }: FallbackProps) => {
  if (error.message.includes("200")) {
    return <NotFoundPage />;
  }

  return <SeverErrorPage error={error} />;
};
