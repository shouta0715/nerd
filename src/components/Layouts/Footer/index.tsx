import Link from "next/link";
import React, { FC } from "react";

export const Footer: FC = () => (
  <footer className="bg-white">
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-4 grid grid-cols-3 gap-y-4 md:grid-cols-4">
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-sm text-gray-600 underline hover:text-gray-500"
            href="/terms"
          >
            利用規約
          </Link>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-sm text-gray-600 underline hover:text-gray-500"
            href="/privacy"
          >
            プライバシーポリシー
          </Link>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <a
            className="inline-block text-sm text-gray-600 underline hover:text-gray-500"
            href="https://forms.gle/GMzgLTw6FA8S6jjS9"
            rel="noreferrer"
            target="_blank"
          >
            お問い合わせへ
          </a>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-sm text-gray-600 underline hover:text-gray-500"
            href="/data"
          >
            データについて
          </Link>
        </p>
      </div>
      <div className=" md:items-center md:justify-between lg:flex">
        <p className="text-center text-xs leading-5 text-gray-500">
          当サイトは個人が運営している非公式のものであり、当サイトに掲載されているアニメ会社の企業様とは一切関係ありません。
        </p>
        <div className="mt-8 lg:order-1 lg:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()}
            <a
              className="inline-block px-1 text-sm text-blue-600 underline hover:text-blue-500"
              href="https://twitter.com/shoutapu0715"
            >
              shouta
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
