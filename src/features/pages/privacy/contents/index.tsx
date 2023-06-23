import React from "react";
import { PrivacyItem } from "src/features/pages/privacy/types";

export const PrivacyItems = ({ items }: { items: PrivacyItem[] }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.key}>
          {item.content}
          {item.sub_contents && (
            <ol className="flex list-decimal flex-col gap-4 pl-6 pt-4 text-base leading-6 text-gray-900">
              {item.sub_contents.map((sub_item) => (
                <li key={sub_item.key}>{sub_item.content}</li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </>
  );
};
