import React from "react";
import { Tables } from "src/features/pages/usage/items/Tables";
import { liveTables } from "src/features/pages/usage/tableItems";

export const LiveDifference = () => {
  return (
    <Tables
      tableContents={liveTables.contents}
      tableHeaders={liveTables.header}
      title={liveTables.title}
    />
  );
};
