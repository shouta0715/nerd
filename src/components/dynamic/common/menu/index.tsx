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
          <p>
            <Text className="text-sm text-pink-600" component="span">
              投稿時に表示される名前を変更できます。
            </Text>
          </p>
        </div>
        <MenuForm />
      </section>
      <MenuModal />
    </>
  );
};
