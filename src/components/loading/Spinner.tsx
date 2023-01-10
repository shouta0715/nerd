import { Loader } from "@mantine/core";
import React, { FC } from "react";

export const Spinner: FC = () => (
  <div className="flex h-full w-full items-center justify-center">
    <Loader size="xl" />
  </div>
);
