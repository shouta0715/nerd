import React from "react";
import { FallbackProps } from "react-error-boundary";
import { ForbiddenPage } from "src/components/Elements/error/403";
import { NotFoundPage } from "src/components/Elements/error/404";
import { SeverErrorPage } from "src/components/Elements/error/500";

export const ErrorPage = ({ error }: FallbackProps) => {
  if (error.message.includes("200")) {
    return <NotFoundPage />;
  }

  if (error.message.includes("403")) {
    return <ForbiddenPage error={error} />;
  }

  return <SeverErrorPage error={error} />;
};
