import React from "react";
import { Tables } from "src/features/pages/usage/items/Tables";
import { chatTables } from "src/features/pages/usage/tableItems";

export const ChatDifference = () => {
  return (
    <Tables
      tableContents={chatTables.contents}
      tableHeaders={chatTables.header}
      title={chatTables.title}
    />
  );
};
