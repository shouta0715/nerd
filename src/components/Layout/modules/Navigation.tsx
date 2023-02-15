import { Card, Text, SimpleGrid, Group, Anchor } from "@mantine/core";
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
  { title: "今日放送", icon: IconDeviceTv, color: "text-blue-400" },
  { title: "検索", icon: IconSearch, color: "text-indigo-400" },
  { title: "設定", icon: IconSettings, color: "text-gray-500" },
  { title: "作品の要望", icon: IconReceiptRefund, color: "text-green-500" },
  { title: "使い方", icon: IconBook, color: "text-red-400" },
  { title: "マイリスト", icon: IconPlus, color: "text-orange-400" },
];

export const Navigation: FC = () => {
  const items = mockdata.map((item) => (
    <Link
      href="/"
      key={item.title}
      className="flex h-20 flex-col items-center justify-center
      rounded-md bg-white text-center transition-all duration-200 hover:scale-105 hover:bg-slate-50"
    >
      <item.icon className={`${item.color}`} size={32} />
      <Text component="span" size="xs" mt={7}>
        {item.title}
      </Text>
    </Link>
  ));

  return (
    <div className="px-6">
      <Card
        radius="md"
        withBorder
        bg="white"
        className="mx-auto max-w-md border-indigo-200"
      >
        <Group position="apart">
          <Text className="font-bold">Services</Text>
          <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
            プライバシーポリシー
          </Anchor>
        </Group>
        <SimpleGrid cols={3} mt="md" className="p-4" bg="indigo.1">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  );
};
