import { Card, Text, SimpleGrid } from "@mantine/core";
import {
  IconReceiptRefund,
  IconSearch,
  IconSettings,
  IconBook,
  IconPlus,
  IconDeviceTv,
} from "@tabler/icons";
import Link from "next/link";
import React, { FC } from "react";

const mockdata = [
  { title: "今日放送", icon: IconDeviceTv, color: "blue" },
  { title: "検索", icon: IconSearch, color: "indigo" },
  { title: "設定", icon: IconSettings, color: "gray" },
  { title: "作品の要望", icon: IconReceiptRefund, color: "teal" },
  { title: "使い方", icon: IconBook, color: "red" },
  { title: "マイリスト", icon: IconPlus, color: "orange" },
];

export const Navigation: FC = () => {
  const items = mockdata.map((item) => (
    <Link
      href="/"
      key={item.title}
      className="flex h-20 flex-col items-center justify-center
      rounded-md bg-white text-center transition-all duration-200 hover:scale-105 hover:bg-slate-50"
    >
      <item.icon color={item.color} size={32} />
      <Text component="span" size="xs" mt={7}>
        {item.title}
      </Text>
    </Link>
  ));

  return (
    <div className="px-6">
      <Card radius="md" className="bg-transparent p-0">
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  );
};
