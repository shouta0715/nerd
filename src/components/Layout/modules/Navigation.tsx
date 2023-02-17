import { Card, Text, Group, Anchor } from "@mantine/core";
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
  {
    title: "今日放送",
    icon: IconDeviceTv,
    color: "text-blue-400",
    href: "/today",
  },
  { title: "検索", icon: IconSearch, color: "text-indigo-400", href: "/today" },
  { title: "設定", icon: IconSettings, color: "text-gray-500", href: "/today" },
  {
    title: "作品の要望",
    icon: IconReceiptRefund,
    color: "text-green-500",
    href: "/today",
  },
  { title: "使い方", icon: IconBook, color: "text-red-400", href: "/today" },
  {
    title: "マイリスト",
    icon: IconPlus,
    color: "text-orange-400",
    href: "/today",
  },
];

export const Navigation: FC = () => {
  const items = mockdata.map((item) => (
    <Link
      href={item.href}
      key={item.title}
      className="flex h-20  flex-col items-center justify-center
      rounded-md  text-center transition-all duration-100 hover:scale-105"
    >
      <item.icon className={`${item.color}`} size={32} />
      <Text
        ff="Hiragino Sans"
        component="span"
        className="text-xs md:text-sm"
        mt={7}
      >
        {item.title}
      </Text>
    </Link>
  ));

  return (
    <div className="px-6">
      <Card
        radius="md"
        className="mx-auto flex max-w-md flex-col items-stretch bg-transparent"
      >
        <Group position="apart" className="px-4">
          <Text ff="Hiragino Sans" className="text-sm font-bold md:text-base">
            Services
          </Text>
          <Anchor
            size="xs"
            ff="Hiragino Sans"
            color="dimmed"
            sx={{ lineHeight: 1 }}
          >
            プライバシーポリシー
          </Anchor>
        </Group>
        <div className="mt-2 grid grid-cols-3 justify-between gap-1">
          {items}
        </div>
      </Card>
    </div>
  );
};
