import React from "react";
import { Text } from "src/components/Elements/Text";
import { MenuForm } from "src/components/Form/Menu";
import { MenuModal } from "src/components/Modal/Menu";

export const Menu = () => {
  return (
    <>
      <section>
        <div className="mb-2 flex items-center justify-between">
          <Text size="sm">メニュー</Text>
        </div>
        <MenuForm />
      </section>
      <MenuModal />
    </>
  );
};
