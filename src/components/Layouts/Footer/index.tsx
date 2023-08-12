import Link from "next/link";
import React, { FC } from "react";

export const Footer: FC = () => (
  <footer className="mt-10 border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <div className="mb-8 grid grid-cols-2 gap-y-8 md:grid-cols-3">
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-xs text-gray-600 underline hover:text-gray-500"
            href="/terms"
          >
            利用規約
          </Link>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-xs text-gray-600 underline hover:text-gray-500"
            href="/privacy"
          >
            プライバシーポリシー
          </Link>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <a
            className="inline-block text-xs text-gray-600 underline hover:text-gray-500"
            href="https://forms.gle/GMzgLTw6FA8S6jjS9"
            rel="noreferrer"
            target="_blank"
          >
            お問い合わせへ
          </a>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-xs text-gray-600 underline hover:text-gray-500"
            href="/data"
          >
            データについて
          </Link>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-xs text-gray-600 underline hover:text-gray-500"
            href="/about"
          >
            サイトについて
          </Link>
        </p>
        <p className="text-center text-xs leading-5 text-gray-500">
          <Link
            className="inline-block text-xs text-gray-600 underline hover:text-gray-500"
            href="/recommend"
          >
            おすすめのアニメ
          </Link>
        </p>
      </div>
      <div className="md:items-center md:justify-between">
        <p className="text-center text-xs leading-5 text-gray-500">
          当サイトは個人のアニメファンが運営している非公式のものであり、当サイトに掲載されているアニメ、アニメ会社の企業様及び他の関係各社様とは一切関係ありません。
        </p>
        <p className="mt-1 text-center text-xs leading-5 text-gray-500">
          下記はサイト独自の内容に関する著作権を示すものです。
        </p>
        <div className="mt-6">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()}
            <a
              className="inline-block px-1 text-sm text-blue-600 underline hover:text-blue-500"
              href="https://twitter.com/shoutapu0715"
            >
              shouta
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
